@extends('layouts/http')

@section('head')
    <meta property="og:title" content="gifable.io">
    <meta property="og:site_name" content="gifable.io">
    <meta property="og:url" content="{{ action('IndexController@getGif', ['gif' => $gif->shortcode]) }}">
    <meta property="og:description" content="We squash your GIFs into super efficient HTML5 videos that can be viewed from any device - saving you time and bandwidth.">
    <meta property="og:image" content="{{ $gif->png_https_url }}">

    <meta property="og:type" content="video.other">
    <meta property="og:video:url" content="{{ $gif->webm_http_url }}">
    <meta property="og:video:secure_url" content="{{ $gif->webm_https_url }}">
    <meta property="og:video:type" content="video/webm">
    <meta property="og:video:width" content="{{ $gif->width }}">
    <meta property="og:video:height" content="{{ $gif->height }}">
@stop

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/gif.css">
@stop

@section('content')
    <header>
        <div class="outer-container">
            <div class="span-columns-6">
                <a href="/"><img src="/img/index-logo.png"></a>
            </div>
            <div class="span-columns-6" style="text-align: right;">
                <ul>
                    <li><a href="#/api">About</a></li><!--
                    --><li><a href="#/api">API</a></li><!--
                    --><li><a href="#/donate">Donate</a></li>
                </ul>
            </div>
        </div>
    </header>
    <main>
        @if(empty($gif->webm_https_url) && empty($gif->webm_https_url))
            <div class="outer-container">
                <div class="test">Your GIF is currently processing. Most GIFs are optimized in about 30-60 seconds. Check back soon!</div>
            </div>
        @endif
        <div class="gif-wrapper">
            @if(empty($gif->webm_https_url) && empty($gif->webm_https_url))
                <img src="{{ $gif->gif_https_url }}">
            @else
                <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" webkit-playsinline>
                    <source src="{{ $gif->webm_https_url }}" type="video/webm">
                    <source src="{{ $gif->mp4_https_url }}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            @endif
        </div>
        <div class="outer-container">
            <div class="links">
                <div class="row">
                    <label>Gifable Link</label>
                    <input type="url" value="{{ action('IndexController@getGif', ['gif' => $gif->shortcode]) }}" onclick="select()">
                </div>
                <div class="row">
                    <label>Direct GIF Link (Slower)</label>
                    <input type="url" value="{{ $gif->gif_https_url }}" onclick="select()">
                </div>
            </div>
        </div>
    </main>
    <footer>
        Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
    </footer>
@stop
