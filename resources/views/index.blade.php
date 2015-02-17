@extends('layouts/http')

@section('styles')
    <link rel="stylesheet" type="text/css" href="/css/index.css">
@stop

@section('content')
    <main ng-view></main>
@stop

@section('scripts')
    <script src="/js/index/app.js"></script>
    <script src="/js/index/templates.js"></script>
@stop
