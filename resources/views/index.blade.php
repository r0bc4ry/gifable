@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/index.css">
@stop

@section('content')
    <header>
        <a href="#/"><img src="/img/index-logo.png"></a>
        <p>Convert GIFs into HTML5 videos.</p>
    </header>
    <main ng-view></main>
    <footer>
        Made with <i class="fa fa-heart"></i> in Alexandria, VA.
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
