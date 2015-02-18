<!doctype html>
<html lang="en" ng-app="{{ $ngApp or '' }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>gifable.io</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" href="/img/favicon.png">

        <link rel="stylesheet" type="text/css" href="/css/vendors.css">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
        <link rel="stylesheet" href="/fonts/font-awesome-4.3.0/css/font-awesome.min.css">
        @yield('styles')
    </head>
    <body>
        @yield('content')

        <script src="/js/vendors.js"></script>

        <script>
            var _token = '{{ csrf_token() }}';
        </script>

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
