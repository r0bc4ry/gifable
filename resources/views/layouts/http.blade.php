<!doctype html>
<html lang="en" ng-app="{{ $ngApp or '' }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Gifable</title>
        <meta name="description" content="Squash your GIFs into super efficient HTML5 videos that can be viewed from any device.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @yield('head')

        <link rel="icon" type="image/png" href="/img/favicon.png">
        <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/img/touch-icon-ipad.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/img/touch-icon-iphone-2x.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/img/touch-icon-ipad-2x.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/img/touch-icon-iphone-3x.png">

        <link rel="stylesheet" type="text/css" href="/css/vendors.css">
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
        <link rel="stylesheet" href="/fonts/font-awesome-4.3.0/css/font-awesome.min.css">
        @yield('styles')
    </head>
    <body>
        @yield('content')

        <script src="/js/vendors.js"></script>

        @yield('scripts')

        @unless($app->environment('local'))
            <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-38958328-2', 'auto');
                ga('send', 'pageview');
            </script>
        @endunless
    </body>
</html>
