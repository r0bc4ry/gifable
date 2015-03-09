<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;
use Mobile_Detect;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('app', [
            'gifs' => Gif::whereNotNull('webm_https_url')->where('webm_size', '<', 10000000)->orderBy('created_at', 'desc')->limit(8)->get(),
            'ngApp' => 'gifable.app'
        ]);
	}

    public function getGif(Gif $gif, $extension = null)
    {
        $detect = new Mobile_Detect();

        return view('gif', [
            'gif' => $gif,
            'isAndroidOS' => $detect->isAndroidOS()
        ]);
    }

}
