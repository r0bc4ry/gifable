<?php namespace Gifable\Http\Controllers\Api;

use Gifable\Commands\TranscodeGifCommand;
use Gifable\Gif;
use Gifable\Http\Controllers\Controller;
use Gifable\Services\RackspaceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Validator;
use OpenCloud\ObjectStore\Constants\UrlType;
use OpenCloud\ObjectStore\Resource\DataObject;

class GifsController extends Controller {

    public function postIndex(Request $request)
    {
        $v = Validator::make($request->all(), [
            'file' => 'required|image'
        ]);

        if ($v->fails()) {
            throw new \Exception($v->errors()->first());
        }

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

        // Get GIF basic information
        $gifFilePath = $file->getRealPath();
        list($gifWidth, $gifHeight) = getimagesize($gifFilePath);

        // Generate shortcode
        while (true) {
            $shortcode = $this->generateShortcode();
            if (empty(Gif::where('shortcode', $shortcode)->first())) {
                break;
            }
        }

        // Convert first frame of GIF into PNG
        $pngFilePath = sys_get_temp_dir() . '/' . $shortcode . '.png';
        imagepng(imagecreatefromgif($file), $pngFilePath);

        // Upload GIF and PNG files to Rackspace
        $rackspaceService = new RackspaceService();
        $gifDataObject = $rackspaceService->uploadFile($shortcode . '.gif', $gifFilePath);
        $pngDataObject = $rackspaceService->uploadFile($shortcode . '.png', $pngFilePath);

        // Insert the new GIF into the database and return
        $gif = Gif::create([
            'shortcode' => $shortcode,
            'width' => $gifWidth,
            'height' => $gifHeight,
            'png_http_url' => $this->getUrlFromDataObject($pngDataObject),
            'png_https_url' => $this->getUrlFromDataObject($pngDataObject, UrlType::SSL),
            'gif_http_url' => $this->getUrlFromDataObject($gifDataObject),
            'gif_https_url' => $this->getUrlFromDataObject($gifDataObject, UrlType::SSL),
            'gif_size' => filesize($gifFilePath),
        ]);

        // Delete GIF and PNG files
        unlink($gifFilePath);
        unlink($pngFilePath);

        Queue::push(new TranscodeGifCommand($gif));

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
