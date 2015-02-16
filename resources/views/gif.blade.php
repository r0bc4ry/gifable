@extends('layouts/http')

@section('content')
    <video width="480" height="270" autoplay loop>
        <source src="/img/outfile.mp4" type="video/mp4">
        <source src="/img/outfile.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
@stop
