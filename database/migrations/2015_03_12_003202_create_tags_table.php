<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('tags', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('gif_id')->unsigned();
            $table->foreign('gif_id')->references('id')->on('gifs');
            $table->string('tag');
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
        Schema::drop('tags');
	}

}
