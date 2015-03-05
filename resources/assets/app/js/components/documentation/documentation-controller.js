'use strict';

angular.module('gifable.app.controllers')
    .controller('DocumentationController', [
        '$scope',
        function (
            $scope
        ) {
            $scope.postData = JSON.stringify({
                file: "test"
            }, null, 4);

            $scope.postResponse = JSON.stringify({
                status: "success",
                data: {
                    gif: {
                        shortcode: "luk9r1",
                        width: "499",
                        height: "350",
                        gif_size: 2116005,
                        created_at: "2015-03-05 07:12:14",
                        updated_at: "2015-03-05 07:12:34",
                        png_url: "http://files.gifable.io/luk9r1.png",
                        gif_url: "http://files.gifable.io/luk9r1.gif"
                    }
                }
            }, null, 4);

            $scope.getResponse = JSON.stringify({
                status: "success",
                data: {
                    gif: {
                        shortcode: "luk9r1",
                        width: "499",
                        height: "350",
                        gif_size: 2116005,
                        webm_size: 799891,
                        mp4_size: 887815,
                        created_at: "2015-03-05 07:12:14",
                        updated_at: "2015-03-05 07:12:34",
                        png_url: "http://files.gifable.io/luk9r1.png",
                        gif_url: "http://files.gifable.io/luk9r1.gif",
                        webm_url: "http://files.gifable.io/luk9r1.webm",
                        mp4_url: "http://files.gifable.io/luk9r1.mp4"
                    }
                }
            }, null, 4);
        }
    ]);
