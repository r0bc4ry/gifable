<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;
use Mobile_Detect;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('app', [
            'gifs' => Gif::whereNotNull('mp4_https_url')->where('mp4_size', '<', 10000000)->orderBy('created_at')->limit(4)->get(),
            'ngApp' => 'gifable.app'
        ]);
	}

    public function getGif(Gif $gif, $extension = null)
    {
        $detect = new Mobile_Detect();

        if ($extension === '.gifv') {
            return view('gifv', [
                'gif' => $gif,
                'isAndroidOS' => $detect->isAndroidOS()
            ]);
        } else {
            return view('gif', [
                'gif' => $gif,
                'isAndroidOS' => $detect->isAndroidOS()
            ]);
        }
    }

}
