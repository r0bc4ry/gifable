<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;
use Gifable\Services\RackspaceService;
use Exception;
use Illuminate\Http\Request;
use OpenCloud\ObjectStore\Constants\UrlType;
use OpenCloud\ObjectStore\Resource\DataObject;
use Symfony\Component\HttpFoundation\File\File;

class TranscodeController extends Controller {

	public function postIndex(Request $request)
    {
        $this->validate($request, [
            'file' => 'required_without:url|image',
            'url' => 'required_without:file|url'
        ]);

        // Retrieve the input file and perform some additional file validation
        $uploadedFile = $request->file('file');
        if (!$uploadedFile->isValid()) {
            throw new Exception('Uploaded file is not valid.');
        }

        $uploadedFileExtension = $uploadedFile->getClientOriginalExtension();
        if ($uploadedFileExtension !== 'gif') {
            throw new Exception('Uploaded file not supported; must be a GIF.');
        }

        // TODO Add support for entering a GIF's URL

        list($gifWidth, $gifHeight) = getimagesize($uploadedFile->getRealPath());

        // Generate the shortcode and retrieve the GIF's temporary path
        while (true) {
            $shortcode = $this->generateShortcode();
            if (empty(Gif::where('shortcode', $shortcode)->first())) {
                break;
            }
        }
        $outputFilePath = sys_get_temp_dir() . '/' . $shortcode;

        // Convert uploaded GIF to WebM and MP4
        exec('ffmpeg -f gif -i ' . $uploadedFile->getRealPath() . ' -c:v libvpx -crf 4 -b:v 1000K -an ' . $outputFilePath . '.webm' . ' 2>&1', $out, $ret);
        if ($ret) {
            throw new Exception(array_pop($out));
        }
        exec('ffmpeg -f gif -i ' . $uploadedFile->getRealPath() . ' -c:v libx264 -preset slow -crf 18 -an ' . $outputFilePath . '.mp4' . ' 2>&1', $out, $ret);
        if ($ret) {
            throw new Exception(array_pop($out));
        }

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

}
