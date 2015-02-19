@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/index.css">
@stop

@section('content')
    <header>
        <div class="outer-container">
            <div class="span-columns-6">
                <a href="#/"><img src="/img/index-logo.png"></a>
            </div>
            <div class="span-columns-6" style="text-align: right;">
                <ul>
                    <li><a href="#/about">About</a></li><!--
                    --><li><a href="#/api">API</a></li><!--
                    --><li><a href="#/donate">Donate</a></li>
                </ul>
            </div>
        </div>
    </header>
    <main ng-view></main>
    <footer>
        Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
    </footer>
@stop

@section('scripts')
    <script src="/js/index/app.js"></script>
    <script src="/js/index/templates.js"></script>
@stop
