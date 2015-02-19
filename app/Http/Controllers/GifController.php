<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;

class GifController extends Controller {

	public function getGif(Gif $gif)
	{
		return view('gif', [
            'gif' => $gif
        ]);
	}

}
