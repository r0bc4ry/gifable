<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddWebmSupport extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::table('gifs', function(Blueprint $table)
        {
            $table->string('webm_http_url')->nullable();
            $table->string('webm_https_url')->nullable();
            $table->integer('webm_size')->unsigned()->nullable();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::table('gifs', function(Blueprint $table)
        {
            $table->dropColumn(['webm_http_url', 'webm_https_url', 'webm_size']);
        });
	}

}
