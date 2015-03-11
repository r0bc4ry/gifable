<?php namespace Gifable\Commands;

use Gifable\Commands\Command;

use Gifable\BandwidthSaved;
use Gifable\Gif;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Bus\SelfHandling;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class CalculateBandwidthSaved extends Command implements SelfHandling, ShouldBeQueued {

	use InteractsWithQueue, SerializesModels;

    protected $gif;

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct(Gif $gif)
	{
        $this->gif = $gif;
	}

	/**
	 * Execute the command.
	 *
	 * @return void
	 */
	public function handle()
	{
        $bandwidthSaved = BandwidthSaved::first();
        $bandwidthSaved->megabytes = $bandwidthSaved->megabytes + round(($this->gif->gif_size - $this->gif->mp4_size) / 1000000);
        $bandwidthSaved->save();
	}

}
