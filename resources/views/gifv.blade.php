@extends('layouts/http')

@section('head')
    <meta property="og:title" content="Gifable">
    <meta property="og:site_name" content="Gifable">
    <meta property="og:url" content="{{ action('IndexController@getGif', ['gif' => $gif->shortcode]) }}">
    <meta property="og:description" content="Squash your GIFs into super efficient HTML5 videos that can be viewed from any device.">

    <meta property="og:type" content="video.other">
    <meta property="og:video" content="{{ $gif->mp4_https_url }}">
    <meta property="og:video:type" content="video/mp4">
    <meta property="og:video:width" content="{{ $gif->width }}">
    <meta property="og:video:height" content="{{ $gif->height }}">
    <meta property="og:image" content="{{ $gif->png_url }}">
@stop

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/gifv.css">
@stop

@section('content')
    @if(empty($gif->mp4_http_url))
        <img src="{{ $gif->gif_url }}">
    @else
        <video id="video" preload="auto" autoplay="autoplay" loop="loop" muted="muted" poster="{{ $gif->png_url }}">
            <source src="{{ $gif->mp4_url }}" type="video/mp4">
            Video not playing? <a href="{{ $gif->mp4_url }}">Download it</a> instead.
        </video>
    @endif
    <div>
        <a href="/{{ $gif->shortcode }}"><img src="/img/favicon.png">Gifable</a>
    </div>
@stop

@section('scripts')
    @if($isAndroidOS)
        <script>
            var video = document.getElementById('video');
            video.addEventListener('click', function() {
                video.play();
            }, false);
        </script>
    @endif
@stop
