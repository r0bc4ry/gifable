<?php namespace Gifable\Http\Controllers;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('index', [
            'ngApp' => 'gifable.index'
        ]);
	}

    public function getGif(Gif $gif)
    {
        return view('gif', [
            'gif' => $gif
        ]);
    }

}
