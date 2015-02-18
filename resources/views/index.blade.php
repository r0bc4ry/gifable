@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/index.css">
@stop

@section('content')
    <header>
        <div class="outer-container">
            <a href="#/"><img src="/img/index-logo.png"></a>
        </div>
    </header>
    <main ng-view></main>
    <footer>
        Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
        <ul>
            <li><a href="#/api">API</a></li>
            <li><a href="">Donate</a></li>
        </ul>
    </footer>
@stop

@section('scripts')
    <script src="/js/index/app.js"></script>
    <script src="/js/index/templates.js"></script>
@stop
