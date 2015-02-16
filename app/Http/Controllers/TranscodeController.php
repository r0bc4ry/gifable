<?php namespace App\Http\Controllers;

use App\Gif;
use App\Services\RackspaceService;
use Exception;
use Illuminate\Http\Request;
use OpenCloud\ObjectStore\Constants\UrlType;
use Symfony\Component\HttpFoundation\File\File;

class TranscodeController extends Controller {

	public function postIndex(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|image'
        ]);

        $uploadedFile = $request->file('file');
        $fileExtension = $uploadedFile->getClientOriginalExtension();

        if ($fileExtension !== 'gif') {
            throw new Exception('Uploaded file not support; must be a GIF.');
        }

        $outputFileName = $this->generateShortcode();
        $outputFilePath = sys_get_temp_dir() . '/' . $outputFileName;

        // Convert uploaded GIF to WebM and MP4
        exec('ffmpeg -f gif -i ' . $uploadedFile->getRealPath() . ' -c:v libvpx -crf 4 -b:v 1000K -an ' . $outputFilePath . '.webm' . ' 2>&1', $out, $ret);

        if ($ret) {
            print_r($out);
        }

        exec('ffmpeg -f gif -i ' . $uploadedFile->getRealPath() . ' -c:v libx264 -preset slow -crf 18 -an ' . $outputFilePath . '.mp4' . ' 2>&1', $out, $ret);

        if ($ret) {
            print_r($out);
        }

        // Upload files to Rackspace
        $rackspaceService = new RackspaceService();
        $gifFile = $rackspaceService->uploadFile($uploadedFile, $outputFileName . '.gif');
        $webmFile = $rackspaceService->uploadFile(new File($outputFilePath . '.webm'), $outputFileName . '.webm');
        $mp4File = $rackspaceService->uploadFile(new File($outputFilePath . '.mp4'), $outputFileName . '.mp4');

        // Remove the temporary files
        unlink($outputFilePath . '.webm');
        unlink($outputFilePath . '.mp4');

        $gif = Gif::create([
            'shortcode' => '',
            'gif_http_url' => $gifFile->getPublicUrl()->getScheme() . '://' . $gifFile->getPublicUrl()->getHost() . $gifFile->getPublicUrl()->getPath(),
            'gif_https_url' => $gifFile->getPublicUrl(UrlType::SSL)->getScheme() . '://' . $gifFile->getPublicUrl(UrlType::SSL)->getHost() . $gifFile->getPublicUrl(UrlType::SSL)->getPath(),
            'webm_http_url' => $webmFile->getPublicUrl()->getScheme() . '://' . $webmFile->getPublicUrl()->getHost() . $webmFile->getPublicUrl()->getPath(),
            'webm_https_url' => $webmFile->getPublicUrl(UrlType::SSL)->getScheme() . '://' . $webmFile->getPublicUrl(UrlType::SSL)->getHost() . $webmFile->getPublicUrl(UrlType::SSL)->getPath(),
            'mp4_http_url' => $mp4File->getPublicUrl()->getScheme() . '://' . $mp4File->getPublicUrl()->getHost() . $mp4File->getPublicUrl()->getPath(),
            'mp4_https_url' => $mp4File->getPublicUrl(UrlType::SSL)->getScheme() . '://' . $mp4File->getPublicUrl(UrlType::SSL)->getHost() . $mp4File->getPublicUrl(UrlType::SSL)->getPath()
        ]);

        return response()->apiSuccess('gif', $gif);
    }

    private function generateShortcode()
    {
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        $string = '';
        for ($i = 0; $i < 6; $i++) {
            $string .= $characters[rand(0, strlen($characters) - 1)];
        }

        return $string;
    }

}
