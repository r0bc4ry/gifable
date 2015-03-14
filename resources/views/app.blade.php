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
                    <div class="span-columns-6 links">
                        <ul>
                            <li><a href="#/api">API</a></li>
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
        var $gifs = {!! json_encode($gifs)  !!};
    </script>

    <script src="/js/app/app.js"></script>
    <script src="/js/app/templates.js"></script>
@stop
