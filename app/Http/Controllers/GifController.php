<?php namespace App\Http\Controllers;

class GifController extends Controller {

	public function getGif()
	{
        // TODO Perform some checks to determine which type of file is best to return to the view
		return view('gif');
	}

}
