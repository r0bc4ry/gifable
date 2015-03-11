<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBandwidthSavedTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('bandwidth_saved', function(Blueprint $table)
        {
            $table->increments('id');
            $table->bigInteger('megabytes')->unsigned();
        });

        DB::table('bandwidth_saved')->insert(
            array(
                'id' => 1,
                'megabytes' => 0
            )
        );
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop('bandwidth_saved');
	}

}
