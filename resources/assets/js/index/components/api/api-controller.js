'use strict';

angular.module('gifable.index.controllers')
    .controller('ApiController', [
        '$scope',
        function (
            $scope
        ) {
            $scope.transcodePost = JSON.stringify({
                file: "test",
                url: "test"
            }, null, 4);

            $scope.transcodeResponse = JSON.stringify({
                success: true,
                data: {
                    gif: {
                        shortcode: "test",
                        width: "test",
                        height: "test",
                        gif_http_url: "test",
                        gif_https_url: "test",
                        webm_http_url: "test",
                        webm_https_url: "test",
                        mp4_http_url: "test",
                        mp4_https_url: "test"
                    }
                }
            }, null, 4);
        }
    ]);
