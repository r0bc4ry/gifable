<?php namespace Gifable;

use Illuminate\Database\Eloquent\Model;

class Gif extends Model {

    protected $appends = [
        'png_url',
        'gif_url',
        'mp4_url',
        'webm_url'
    ];

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
        'shortcode',
        'width',
        'height',
        'png_http_url',
        'png_https_url',
        'gif_http_url',
        'gif_https_url',
        'gif_size',
        'mp4_http_url',
        'mp4_https_url',
        'mp4_size',
        'webm_http_url',
        'webm_https_url',
        'webm_size'
    ];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [
        'id',
        'png_http_url',
        'png_https_url',
        'gif_http_url',
        'gif_https_url',
        'mp4_http_url',
        'mp4_https_url',
        'webm_http_url',
        'webm_https_url'
    ];

    public function getPngUrlAttribute()
    {
        if (app()->environment('local')) {
            return $this->png_http_url;
        } else {
            return 'http://files.gifable.io/' . $this->shortcode . '.png';
        }
    }

    public function getGifUrlAttribute()
    {
        if (app()->environment('local')) {
            return $this->gif_http_url;
        } else {
            return 'http://files.gifable.io/' . $this->shortcode . '.gif';
        }
    }

    public function getMp4UrlAttribute()
    {
        if (app()->environment('local')) {
            return $this->mp4_http_url;
        } else {
            return 'http://files.gifable.io/' . $this->shortcode . '.mp4';
        }
    }

    public function getWebmUrlAttribute()
    {
        if (app()->environment('local')) {
            return $this->webm_http_url;
        } else {
            return 'http://files.gifable.io/' . $this->shortcode . '.webm';
        }
    }

    public function tags()
    {
        return $this->hasMany('Gifable\Tag');
    }

}
