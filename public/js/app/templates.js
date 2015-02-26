angular.module("gifable.app.templates").run(["$templateCache", function($templateCache) {$templateCache.put("components/documentation/documentation.html","<gifable-header></gifable-header>\r\n<section class=\"outer-container\">\r\n    <h2>POST /api/v1/gifs</h2>\r\n    <p>Convert a GIF file into an HTML5 video.</p>\r\n    <h4>Sample Post Data</h4>\r\n    <pre>{{ postData }}</pre>\r\n    <h4>Sample Response</h4>\r\n    <pre>{{ postResponse }}</pre>\r\n\r\n    <h2>GET /api/v1/gifs/{shortcode}</h2>\r\n    <p>Retrieve a GIF\'s stored information based on URL shortcode.</p>\r\n    <h4>Sample Response</h4>\r\n    <pre>{{ getResponse }}</pre>\r\n</section>\r\n");
$templateCache.put("components/index/index.html","<gifable-index-header></gifable-index-header>\r\n<section class=\"component index\">\r\n    <div class=\"outer-container\">\r\n        <div class=\"row\">\r\n            <div class=\"span-columns-6\">\r\n                <h3><i class=\"fa fa-file-image-o\"></i>Efficient Files</h3>\r\n                <p>HTML5 vidoes are, on average, 25% the size of their original GIF - allowing you to load your high-quality cat GIFs without any waiting.</p>\r\n            </div>\r\n            <div class=\"span-columns-6\">\r\n                <h3><i class=\"fa fa-globe\"></i>Available Anywhere</h3>\r\n                <p>Using Rackspace\'s Cloud Files, Gifable is about to deliver your files to you as fast as possible, anywhere in the world.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"span-columns-6\">\r\n                <h3><i class=\"fa fa-code\"></i>Open Source RESTful API</h3>\r\n                <p>Code is on GitHub. RESTful API available to get/add GIFs.</p>\r\n            </div>\r\n            <div class=\"span-columns-6\">\r\n                <h3><i class=\"fa fa-mobile\"></i>Mobile Ready</h3>\r\n                <p>View Gifable HTML5 videos and GIFs on any device.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"gif-tile-wrapper\">\r\n            <div class=\"gif-tile\" ng-repeat=\"gif in gifs\" gifable-repeat-events ng-click=\"navigateToGif(gif)\" ng-mouseover=\"visibleGif = $index\" ng-mouseout=\"visibleGif = false\" ng-style=\"{ \'background-image\': \'url(\' + gif.png_https_url + \')\' }\" style=\"background-position: center center; background-size: cover;\">\r\n                <video preload=\"auto\" muted=\"muted\" loop=\"loop\" webkit-playsinline ng-show=\"visibleGif === $index\" ng-mouseover=\"playGif($event)\" ng-mouseout=\"pauseGif($event)\" ng-style=\"{ width: calculateVideoWidth(gif), height: calculateVideoHeight(gif), top: calculateVideoTop(gif), left: calculateVideoLeft(gif) }\">\r\n                    <source ng-src=\"{{ gif.mp4_https_url }}\" type=\"video/webm\">\r\n                    <source ng-src=\"{{ gif.webm_https_url }}\" type=\"video/mp4\">\r\n                    Your browser does not support the video tag.\r\n                </video>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");
$templateCache.put("shared/gifable-file-input/gifable-file-input.html","<div class=\"directive gifable-file-input\" ng-class=\"{ \'disabled\': file && file[0] }\">\r\n    <button ng-file-select ng-accept=\"\'image/gif\'\" ng-model=\"file\" ng-file-change=\"upload($files)\">\r\n        <div ng-hide=\"file && file[0]\"><i class=\"fa fa-cloud-upload\"></i>Upload GIF</div>\r\n        <div ng-show=\"file && file[0]\"><i class=\"fa fa-spinner fa-pulse\"></i>Uploading... {{ progressPercentage }}%</div>\r\n    </button>\r\n</div>\r\n");
$templateCache.put("shared/gifable-header/gifable-header.html","<div class=\"directive gifable-header\">\r\n    <div class=\"navigation\">\r\n        <div class=\"outer-container\">\r\n            <div class=\"logo\">\r\n                <a href=\"#/\"><img src=\"/img/index-logo.png\"></a>\r\n            </div>\r\n            <div class=\"links\">\r\n                <ul>\r\n                    <li><a href=\"#/about\">About</a></li>\r\n                    <li><a href=\"#/api\">API</a></li>\r\n                    <li><a href=\"#/donate\">Donate</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("components/index/gifable-index-header/gifable-index-header.html","<div class=\"directive gifable-index-header\">\r\n    <div class=\"navigation\">\r\n        <div class=\"outer-container\">\r\n            <div class=\"logo\">\r\n                <a href=\"#/\"><img src=\"/img/index-logo.png\"></a>\r\n            </div>\r\n            <div class=\"links\">\r\n                <ul>\r\n                    <li><a href=\"#/about\">About</a></li>\r\n                    <li><a href=\"#/api\">API</a></li>\r\n                    <li><a href=\"#/donate\">Donate</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"call-to-action\">\r\n        <div class=\"outer-container\">\r\n            <h1>Optimize Your GIFs</h1>\r\n            <div class=\"input\">\r\n                <gifable-file-input></gifable-file-input>\r\n            </div>\r\n            <p>We squash your GIFs into super efficient HTML5 videos that can be viewed from any device - saving you time and bandwidth.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n");}]);