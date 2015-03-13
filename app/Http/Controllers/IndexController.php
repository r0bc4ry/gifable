<?php namespace Gifable\Http\Controllers;

use Gifable\BandwidthSaved;
use Gifable\Commands\CalculateBandwidthSaved;
use Gifable\Gif;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Mobile_Detect;

class IndexController extends Controller {

	public function getIndex()
	{
		return view('app', [
            'bandwidth' => BandwidthSaved::first()->megabytes,
            'gifs' => Gif::whereNotNull('mp4_https_url')->where('mp4_size', '<', 10000000)->orderBy('created_at')->limit(4)->get(),
            'ngApp' => 'gifable.app'
        ]);
	}

    public function getGif(Gif $gif, $extension = null)
    {
        Queue::push(new CalculateBandwidthSaved($gif));

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
                'bandwidth' => BandwidthSaved::first()->megabytes,
                'gif' => $gif,
                'isAndroidOS' => (new Mobile_Detect())->isAndroidOS(),
                'ngApp' => 'gifable.gif'
            ]);
        }
    }

}
