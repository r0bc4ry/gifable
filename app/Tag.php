<?php namespace Gifable;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model {

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['gif_id', 'tag'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [];

    public function gif()
    {
        return $this->belongsTo('Gifable\Gif');
    }

}
