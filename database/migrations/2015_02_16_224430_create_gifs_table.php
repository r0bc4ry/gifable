<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGifsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('gifs', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('shortcode')->unique();
            $table->string('width');
            $table->string('height');
            $table->string('gif_http_url');
            $table->string('gif_https_url');
            $table->string('webm_http_url');
            $table->string('webm_https_url');
            $table->string('mp4_http_url');
            $table->string('mp4_https_url');
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop('gifs');
	}

}
