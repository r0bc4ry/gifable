<?php namespace Gifable\Http\Controllers;

use Gifable\Gif;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Mobile_Detect;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('app', [
            'gifs' => Gif::where('webm_size', '<', 1000000)->orderBy('created_at')->limit(8)->get(),
            'ngApp' => 'gifable.app'
        ]);
	}

    public function getGif(Gif $gif, $extension = null)
    {
        if ($extension === '.gifv') {
            return view('gifv', [
                'gif' => $gif,
                'isAndroidOS' => (new Mobile_Detect())->isAndroidOS()
            ]);
        } else {
            // Get the top four most popular tags for this GIF
            $tags = DB::table('tags')
                ->select('tag', DB::raw('count(*) as count'))
                ->groupBy('tag')
                ->where('gif_id', $gif->id)
                ->orderBy('count', 'desc')
                ->take(20)
                ->get();

            $gif['tags'] = $tags;

            // Return view
            return view('gif', [
                'gif' => $gif,
                'isAndroidOS' => (new Mobile_Detect())->isAndroidOS(),
                'ngApp' => 'gifable.gif'
            ]);
        }
    }

}
