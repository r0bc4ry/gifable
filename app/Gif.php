<?php namespace Gifable;

use Illuminate\Database\Eloquent\Model;

class Gif extends Model {

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['shortcode', 'width', 'height', 'png_http_url', 'png_https_url', 'gif_http_url', 'gif_https_url', 'gif_size'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['id'];

}
