<?php namespace Gifable\Http\Controllers\Api;

use Gifable\Commands\TranscodeGifCommand;
use Gifable\Gif;
use Gifable\Http\Controllers\Controller;
use Gifable\Services\RackspaceService;
use Gifable\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Validator;
use OpenCloud\ObjectStore\Constants\UrlType;
use OpenCloud\ObjectStore\Resource\DataObject;

class GifsController extends Controller {

    public function postIndex(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|image'
        ]);

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

        // Transcode GIF to MP4
        $mp4FilePath = sys_get_temp_dir() . '/' . $shortcode . '.mp4';
        exec('ffmpeg -i "' . $gifFilePath . '" -c:v libx264 -profile:v baseline -level:v 3.0 -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an ' . $mp4FilePath, $output, $return);

        if ($return != 0) {
            throw new \Exception('An error occurred transcoding your GIF - please try again.');
        }

        // Upload GIF, PNG, and MP4 files to Rackspace
        $rackspaceService = new RackspaceService();
        $dataObjects = $rackspaceService->uploadFiles([
            [
                'name' => $shortcode . '.gif',
                'path' => $gifFilePath,
            ],
            [
                'name' => $shortcode . '.png',
                'path' => $pngFilePath,
            ],
            [
                'name' => $shortcode . '.mp4',
                'path' => $mp4FilePath,
            ],
        ]);

        foreach ($dataObjects as $index => $dataObject) {
            if ($index === 0) {
                $gifDataObject = $dataObject;
            } else if ($index === 1) {
                $pngDataObject = $dataObject;
            } else if ($index === 2) {
                $mp4DataObject = $dataObject;
            }
        }

        // Insert the new GIF into the database
        $gif = Gif::create([
            'shortcode' => $shortcode,
            'width' => $gifWidth,
            'height' => $gifHeight,
            'png_http_url' => $this->getUrlFromDataObject($pngDataObject),
            'png_https_url' => $this->getUrlFromDataObject($pngDataObject, UrlType::SSL),
            'gif_http_url' => $this->getUrlFromDataObject($gifDataObject),
            'gif_https_url' => $this->getUrlFromDataObject($gifDataObject, UrlType::SSL),
            'gif_size' => filesize($gifFilePath),
            'mp4_http_url' => $this->getUrlFromDataObject($mp4DataObject),
            'mp4_https_url' => $this->getUrlFromDataObject($mp4DataObject, UrlType::SSL),
            'mp4_size' => filesize($mp4FilePath)
        ]);

        // Delete GIF, PNG, and MP4 files
        unlink($gifFilePath);
        unlink($pngFilePath);
        unlink($mp4FilePath);

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
        // Get the top four most popular tags for this GIF
        $tags = DB::table('tags')
            ->select('tag', DB::raw('count(*) as count'))
            ->groupBy('tag')
            ->where('gif_id', $gif->id)
            ->orderBy('count', 'desc')
            ->take(4)
            ->get();

        $gif['tags'] = $tags;

        // Return response
        return response()->apiSuccess('gif', $gif);
    }

    public function postTags(Request $request, Gif $gif)
    {
        $this->validate($request, [
            'tag' => 'required|string'
        ]);

        $tag = Tag::create([
            'gif_id' => $gif->id,
            'tag' => strtolower($request->input('tag'))
        ]);

        return response()->apiSuccess('tag', $tag);
    }

}
