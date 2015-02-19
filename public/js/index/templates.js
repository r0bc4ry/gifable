angular.module("gifable.index.templates").run(["$templateCache", function($templateCache) {$templateCache.put("components/about/about.html","<section class=\"outer-container\">\r\n    <p>Here\'s some text.</p>\r\n</section>\r\n");
$templateCache.put("components/api/api.html","<section class=\"outer-container\">\r\n    <h2>POST /api/v1/gif</h2>\r\n    <p>Convert a GIF file into an HTML5 video.</p>\r\n    <h4>Sample Post Data</h4>\r\n    <pre>{{ postData }}</pre>\r\n    <h4>Sample Response</h4>\r\n    <pre>{{ postResponse }}</pre>\r\n\r\n    <h2>GET /api/v1/gif/{shortcode}</h2>\r\n    <p>Retrieve a GIF\'s stored information based on URL shortcode.</p>\r\n    <h4>Sample Response</h4>\r\n    <pre>{{ getResponse }}</pre>\r\n</section>\r\n");
$templateCache.put("components/index/index.html","<section class=\"outer-container\">\r\n    <div id=\"gifable-dropzone\" class=\"dropzone\"></div>\r\n    <div class=\"url-input-wrapper\">\r\n        <div class=\"label\">\r\n            <b>OR</b> Paste GIF URL:\r\n        </div>\r\n        <div class=\"input\">\r\n            <input type=\"url\" placeholder=\"http://gifable.io/\">\r\n        </div>\r\n    </div>\r\n</section>\r\n");}]);