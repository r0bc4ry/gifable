<?php namespace Gifable\Http\Controllers\Api;

use FFMpeg\FFMpeg;
use FFMpeg\Format\Video\WebM;
use FFMpeg\Format\Video\X264;
use Gifable\Gif;
use Gifable\Http\Controllers\Controller;
use Gifable\Services\RackspaceService;
use Illuminate\Http\Request;
use OpenCloud\ObjectStore\Constants\UrlType;
use OpenCloud\ObjectStore\Resource\DataObject;
use Symfony\Component\HttpFoundation\File\File;

class GifsController extends Controller {

    public function postIndex(Request $request)
    {
        $this->validate($request, [
            'file' => 'required_without:url|image',
            'url' => 'required_without:file|url'
        ]);

        // Retrieve the input file and perform some additional file validation
        $uploadedFile = $request->file('file');
        if (!$uploadedFile->isValid()) {
            throw new \Exception('Uploaded file is not valid.');
        }

        $uploadedFileExtension = $uploadedFile->getClientOriginalExtension();
        if ($uploadedFileExtension !== 'gif') {
            throw new \Exception('Uploaded file not supported; must be a GIF.');
        }

        // TODO Add support for entering a GIF's URL

        list($gifWidth, $gifHeight) = getimagesize($uploadedFile->getRealPath());

        // Generate the shortcode and retrieve the GIF's temporary path
//        while (true) {
            $shortcode = $this->generateShortcode();
//            if (empty(Gif::where('shortcode', $shortcode)->first())) {
//                break;
//            }
//        }
        $outputFilePath = sys_get_temp_dir() . '/' . $shortcode;

        $targetBitrate = round($gifWidth * $gifHeight * 30 * 4 * 0.07 / 1000);

        // Convert uploaded GIF to WebM and MP4
        $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($uploadedFile->getRealPath());

        // MP4 format configuration
        $mp4Format = new X264();
        $mp4Format->on('progress', function ($video, $format, $percentage) {
            echo "$percentage % transcoded";
        });
        $mp4Format->setKiloBitrate($targetBitrate);

        // WebM format configuration
        $webmFormat = new WebM();
        $webmFormat->on('progress', function ($video, $format, $percentage) {
            echo "$percentage % transcoded";
        });
        $webmFormat->setKiloBitrate($targetBitrate);

        $video
            ->save($mp4Format, $outputFilePath . '.mp4')
            ->save($webmFormat, $outputFilePath . '.webm');

//        shell_exec('ffmpeg -i ' . $uploadedFile->getRealPath() . ' -c:v libvpx -qmin 0 -qmax 50 -crf 5 -b:v ' . $targetBitrate . 'k -an ' . $outputFilePath . '.webm');
//        shell_exec('ffmpeg -i ' . $uploadedFile->getRealPath() . ' -c:v libx264 -preset slow -crf 18 -an ' . $outputFilePath . '.mp4');

        // Upload GIF, WebM, and MP4 files to Rackspace
        $rackspaceService = new RackspaceService();
        $gifDataObject = $rackspaceService->uploadFile($shortcode . '.gif', $uploadedFile);
        $webmDataObject = $rackspaceService->uploadFile($shortcode . '.webm', new File($outputFilePath . '.webm'));
        $mp4DataObject = $rackspaceService->uploadFile($shortcode . '.mp4', new File($outputFilePath . '.mp4'));

        // Remove the temporary files
        unlink($outputFilePath . '.webm');
        unlink($outputFilePath . '.mp4');

        // Insert the new GIF into the database and return
        $gif = Gif::create([
            'shortcode' => $shortcode,
            'width' => $gifWidth,
            'height' => $gifHeight,
            'gif_http_url' => $this->getUrlFromDataObject($gifDataObject),
            'gif_https_url' => $this->getUrlFromDataObject($gifDataObject, true),
            'webm_http_url' => $this->getUrlFromDataObject($webmDataObject),
            'webm_https_url' => $this->getUrlFromDataObject($webmDataObject, true),
            'mp4_http_url' => $this->getUrlFromDataObject($mp4DataObject),
            'mp4_https_url' => $this->getUrlFromDataObject($mp4DataObject, true)
        ]);

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
    private function getUrlFromDataObject(DataObject $dataObject, $https = false)
    {
        return $dataObject->getPublicUrl($https ? UrlType::SSL : UrlType::CDN)->getScheme() . '://' . $dataObject->getPublicUrl($https ? UrlType::SSL : UrlType::CDN)->getHost() . $dataObject->getPublicUrl($https ? UrlType::SSL : UrlType::CDN)->getPath();
    }

	public function getGif(Gif $gif)
	{
        return response()->apiSuccess('gif', $gif);
	}

}
