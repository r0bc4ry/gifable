@extends('layouts/http')

@section('content')
    <video width="{{ $gif->width }}" height="{{ $gif->height }}" autoplay loop>
        <source src="{{ $gif->webm_https_url }}" type="video/mp4">
        <source src="{{ $gif->mp4_https_url }}" type="video/webm">
        <img src="{{ $gif->gif_https_url }}">
    </video>
@stop
