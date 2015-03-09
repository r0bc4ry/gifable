<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// General
Route::get('/', 'IndexController@getIndex');
Route::get('{gif}', 'IndexController@getGif')->where(['gif' => '[a-z0-9]+']);

// API
Route::group(['namespace' => 'Api', 'prefix' => 'api/v1'], function() {
    Route::post('gifs', 'GifsController@postIndex');
    Route::get('gifs/{gif}', 'GifsController@getGif');
});
