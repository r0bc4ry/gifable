<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('app', [
            'gifs' => Gif::where('width', '>=', 246)->where('height', '>=', 246)->orderBy('created_at', 'desc')->limit(12)->get(),
            'ngApp' => 'gifable.app'
        ]);
	}

    public function getGif(Gif $gif, $extension = null)
    {
        if ($extension === '.gif') {
            return redirect($gif->gif_https_url);
        } else if ($extension === '.webm') {
            return redirect($gif->webm_https_url);
        } else if ($extension === '.mp4') {
            return redirect($gif->mp4_https_url);
        }

        return view('gif', [
            'gif' => $gif
        ]);
    }

}
