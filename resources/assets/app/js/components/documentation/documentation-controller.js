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
                        shortcode: "ylu4dw",
                        width: "499",
                        height: "350",
                        gif_size: 2116005,
                        mp4_size: 152821,
                        created_at: "2015-03-10 03:37:52",
                        updated_at: "2015-03-10 03:37:52",
                        png_url: "http://files.gifable.io/ylu4dw.png",
                        gif_url: "http://files.gifable.io/ylu4dw.gif",
                        mp4_url: "http://files.gifable.io/ylu4dw.mp4"
                    }
                }
            }, null, 4);

            $scope.getResponse = JSON.stringify({
                status: "success",
                data: {
                    gif: {
                        shortcode: "ylu4dw",
                        width: "499",
                        height: "350",
                        gif_size: 2116005,
                        mp4_size: 152821,
                        created_at: "2015-03-10 03:37:52",
                        updated_at: "2015-03-10 03:37:52",
                        png_url: "http://files.gifable.io/ylu4dw.png",
                        gif_url: "http://files.gifable.io/ylu4dw.gif",
                        mp4_url: "http://files.gifable.io/ylu4dw.mp4"
                    }
                }
            }, null, 4);
        }
    ]);
