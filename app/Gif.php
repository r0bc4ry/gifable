<?php namespace Gifable;

use Illuminate\Database\Eloquent\Model;

class Gif extends Model {

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['shortcode', 'width', 'height', 'gif_http_url', 'gif_https_url', 'webm_http_url', 'webm_https_url', 'mp4_http_url', 'mp4_https_url'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [];

}
