<?php namespace Gifable\Http\Controllers\Api;

use Gifable\Gif;
use Gifable\Http\Controllers\Controller;
use Gifable\Services\RackspaceService;
use Illuminate\Http\Request;
use OpenCloud\ObjectStore\Constants\UrlType;
use OpenCloud\ObjectStore\Resource\DataObject;

class GifsController extends Controller {

    public function postIndex(Request $request)
    {
        $this->validate($request, [
            'file' => 'required_without:url|image',
            'url' => 'required_without:file|url',
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');

            // File is valid?
            if (!$file->isValid()) {
                throw new \Exception('Uploaded file is not valid.');
            }

            // File is GIF?
            $fileExtension = $file->getClientOriginalExtension();
            if ($fileExtension !== 'gif') {
                throw new \Exception('File type not supported; must be a GIF image.');
            }

            $gifFilePath = $file->getRealPath();
            $gifFileSize = $file->getSize();
        } else if ($request->has('url')) {
            $url = $request->get('url');

            // Image is GIF?
            $parsedUrl = parse_url($url);
            $pathParts = pathinfo($parsedUrl['path']);
            if ($pathParts['extension'] !== 'gif') {
                throw new \Exception('File type not supported; must be a GIF image.');
            }

            $gifFilePath = $url;
        } else {
            throw new \Exception('File or URL required.');
        }

        // Get image dimensions; also used to verify URL is valid image
        list($gifWidth, $gifHeight) = getimagesize($gifFilePath);
        if (empty($gifWidth) || empty($gifHeight)) {
            throw new \Exception('URL is not a valid file.');
        }

        // Generate the shortcode and retrieve the GIF's temporary path
        $i = 0;
        while ($i < 10) {
            $shortcode = $this->generateShortcode();
            if (empty(Gif::where('shortcode', $shortcode)->first())) {
                break;
            }
            $i++;
        }

        if (empty($shortcode)) {
            throw new \Exception('Not shortcode found within 10 iterations.');
        }

        // Build output path form temporary directory and shortcode
        $outputFilePath = sys_get_temp_dir() . '/' . $shortcode;

        if (!empty($url)) {
            $gifFilePath = $outputFilePath . '.gif';
            copy($url, $gifFilePath);
            $gifFileSize = filesize($gifFilePath);
        }

        // Calculate video bitrate based on image dimensions using the Kush Gauge
        $targetBitrate = round($gifWidth * $gifHeight * 30 * 4 * 0.07 / 1000);

        // Transcode GIF to WebM and MP4
        shell_exec('ffmpeg -i ' . $gifFilePath . ' -c:v libvpx -qmin 0 -qmax 50 -crf 5 -b:v ' . $targetBitrate . 'k -an ' . $outputFilePath . '.webm');
        shell_exec('ffmpeg -i ' . $gifFilePath . ' -c:v libx264 -preset slow -crf 18 -an ' . $outputFilePath . '.mp4');

        // Upload GIF, WebM, and MP4 files to Rackspace
        $rackspaceService = new RackspaceService();
        $gifDataObject = $rackspaceService->uploadFile($shortcode . '.gif', $gifFilePath);
        $webmDataObject = $rackspaceService->uploadFile($shortcode . '.webm', $outputFilePath . '.webm');
        $mp4DataObject = $rackspaceService->uploadFile($shortcode . '.mp4', $outputFilePath . '.mp4');

        // Insert the new GIF into the database and return
        $gif = Gif::create([
            'shortcode' => $shortcode,
            'width' => $gifWidth,
            'height' => $gifHeight,
            'gif_http_url' => $this->getUrlFromDataObject($gifDataObject),
            'gif_https_url' => $this->getUrlFromDataObject($gifDataObject, UrlType::SSL),
            'gif_size' => $gifFileSize,
            'webm_http_url' => $this->getUrlFromDataObject($webmDataObject),
            'webm_https_url' => $this->getUrlFromDataObject($webmDataObject, UrlType::SSL),
            'webm_size' => filesize($outputFilePath . '.webm'),
            'mp4_http_url' => $this->getUrlFromDataObject($mp4DataObject),
            'mp4_https_url' => $this->getUrlFromDataObject($mp4DataObject, UrlType::SSL),
            'mp4_size' => filesize($outputFilePath . '.mp4'),
        ]);

        // Remove the temporary files
        if (!empty($url)) {
            unlink($outputFilePath . '.gif');
        }
        unlink($outputFilePath . '.webm');
        unlink($outputFilePath . '.mp4');

        return response()->apiSuccess('gif', $gif);
    }

    /**
     * Generate a random alphanumeric string used for a GIF's shortcode.
     *
     * @return string
     */
    private function generateShortcode()
    {
        $validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        $string = '';
        for ($i = 0; $i < 6; $i++) {
            $string .= $validCharacters[rand(0, strlen($validCharacters) - 1)];
        }

        return $string;
    }

    /**
     * Get the HTTP/HTTPS URL for a DataObject.
     *
     * @return string
     */
    private function getUrlFromDataObject(DataObject $dataObject, $urlType = UrlType::CDN)
    {
        return $dataObject->getPublicUrl($urlType)->getScheme() . '://' . $dataObject->getPublicUrl($urlType)->getHost() . $dataObject->getPublicUrl($urlType)->getPath();
    }

	public function getGif(Request $request, Gif $gif)
	{
        return response()->apiSuccess('gif', $gif);
	}

}
