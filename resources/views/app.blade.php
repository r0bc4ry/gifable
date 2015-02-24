@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/app.css">
@stop

@section('content')
    <main>
        <section ng-view></section>
        <footer>
            <div class="outer-container">
                <div class="information">
                    Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
                </div>
                <div class="links">
                    <ul>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/api">API</a></li>
                        <li><a href="#/donate">Donate</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </main>
@stop

@section('scripts')
    <script src="/js/app/app.js"></script>
    <script src="/js/app/templates.js"></script>
@stop
