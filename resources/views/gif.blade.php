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
    <link rel="stylesheet" type="text/css" href="/css/gif.css">
@stop

@section('content')
    <main>
        <header>
            <div class="navigation">
                <div class="outer-container">
                    <div class="logo">
                        <a href="/"><img src="/img/index-logo.png"></a>
                    </div>
                    <div class="links">
                        <ul>
                            <li><a href="/#/api">API</a></li>
                            <li>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick">
                                    <input type="hidden" name="hosted_button_id" value="NN9AQHPRKT94A">
                                    <input type="submit" value="Donate">
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <section ng-controller="GifController">
            <div class="gif-wrapper">
                @if(empty($gif->webm_url) && empty($gif->mp4_url))
                    <img src="{{ $gif->gif_url }}">
                @else
                    <video id="video" preload="auto" autoplay="autoplay" loop="loop" muted="muted" poster="{{ $gif->png_url }}">
                        <source src="{{ $gif->webm_url }}" type="video/webm">
                        <source src="{{ $gif->mp4_url }}" type="video/mp4">
                        Video not playing? <a href="{{ $gif->mp4_url }}">Download it</a> instead.
                    </video>
                @endif
            </div>
            <div class="outer-container">
                <div class="links">
                    <div class="row">
                        <div class="span-columns-6">
                            <label>Link</label>
                            <input type="url" value="{{ action('IndexController@getGif', ['gif' => $gif->shortcode]) }}" onclick="select()">
                        </div>
                    </div>
                    <div class="row">
                        <div class="span-columns-6">
                            <label>Direct Link</label>
                            <input type="url" value="{{ action('IndexController@getGif', ['gif' => $gif->shortcode, 'extension' => '.gifv']) }}" onclick="select()">
                        </div>
                    </div>
                </div>
                <div class="tags">
                    <div class="row">
                        <div class="span-columns-6">
                            <label>Popular Tags</label>
                            <div class="tag" ng-cloak ng-repeat="tag in gif.tags" ng-click="onTagClick(tag.tag)">
                                [[ tag.tag ]]
                            </div>
                            <div class="tag" ng-click="showTagDialog()">
                                <i class="fa fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="outer-container">
                <div class="row">
                    <div class="span-columns-6">
                        Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
                    </div>
                    <div class="span-columns-6 links">
                        <ul>
                            <li><a href="/#/api">API</a></li>
                            <li>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick">
                                    <input type="hidden" name="hosted_button_id" value="NN9AQHPRKT94A">
                                    <input type="submit" value="Donate">
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </main>
@stop

@section('scripts')
    <script>
        var $gif = {!! json_encode($gif)  !!};
    </script>

    @if($isAndroidOS)
        <script>
            var video = document.getElementById('video');
            video.addEventListener('click', function() {
                video.play();
            }, false);
        </script>
    @endif

    <script src="/js/gif/app.js"></script>
    <script src="/js/gif/templates.js"></script>
@stop
