<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;

class GifController extends Controller {

	public function getGif(Gif $gif)
	{
        // TODO Perform some checks to determine which type of file is best to return to the view
		return view('gif', ['gif' => $gif]);
	}

}
