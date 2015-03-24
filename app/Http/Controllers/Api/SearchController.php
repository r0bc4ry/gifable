<?php namespace Gifable\Http\Controllers\Api;

use Gifable\Gif;
use Gifable\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller {

    public function getIndex(Request $request)
    {
        $this->validate($request, [
            'q' => 'required|string',
            'limit' => 'integer|min:1|max:100',
            'offset' => 'integer|min:0'
        ]);

        $query = $request->input('q');
        $limit = $request->has('limit') ? $request->get('limit') : 25;
        $offset = $request->has('offset') ? $request->get('offset') : 0;

        // TODO Update this SQL call to be more efficient
        $tags = DB::table('tags')
            ->select('gif_id', DB::raw('count(*) as count'))
            ->where('tag', 'LIKE', '%' . $query . '%')
            ->groupBy('gif_id')
            ->orderBy('count', 'desc')
            ->skip($offset)
            ->take($limit)
            ->get();

        $gifs = [];
        foreach ($tags as $tag) {
            array_push($gifs, Gif::find($tag->gif_id));
        }

        // Generate pagination links if they exist
        $paging = [];
        if (sizeof($gifs) === $limit) {
            $paging['next'] = action('SearchController@getIndex', [
                'query' => $query,
                'limit' => $limit,
                'offset' => $offset + $limit
            ]);
        }
        if ($offset !== 0) {
            $paging['previous'] = action('SearchController@getIndex', [
                'query' => $query,
                'limit' => $limit,
                'offset' => max($offset - $limit, 0)
            ]);
        }

        // Return response
        return response()->apiSuccess([
            'gifs' => $gifs,
            'paging' => $paging
        ]);
    }

}
