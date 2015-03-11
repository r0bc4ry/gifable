@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/app.css">
@stop

@section('content')
    <main>
        <section ng-view></section>
        <footer>
            <div class="outer-container">
                <div class="row">
                    <div class="span-columns-6">
                        Made with <i class="fa fa-heart"></i> by <a href="https://github.com/r0bc4ry" target="_blank">Rob Cary</a>.
                    </div>
                    <div class="span-columns-6" style="text-align: right;">
                        Bandwidth Saved: {{ number_format($bandwidth) }} MB
                    </div>
                </div>
            </div>
        </footer>
    </main>
@stop

@section('scripts')
    <script>
        var $gifs = {!! json_encode($gifs)  !!};
    </script>

    <script src="/js/app/app.js"></script>
    <script src="/js/app/templates.js"></script>
@stop
