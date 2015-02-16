<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>gifable.io</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" href="/img/favicon.png">
        <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/img/touch-icon-ipad.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/img/touch-icon-iphone-2x.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/img/touch-icon-ipad-2x.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/img/touch-icon-iphone-3x.png">

        @yield('styles')
    </head>
    <body>
        @yield('content')

        {{ csrf_token() }}

        @yield('scripts')

        @unless($app->environment('local'))
            <script>
                (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
                        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
                    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
                    e.src='//www.google-analytics.com/analytics.js';
                    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
                ga('create','UA-XXXXX-X','auto');ga('send','pageview');
            </script>
        @endunless
    </body>
</html>
