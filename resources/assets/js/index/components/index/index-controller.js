'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$interval',
        '$scope',
        '$templateCache',
        '$window',

        'FileUploader',
        function (
            $interval,
            $scope,
            $templateCache,
            $window,

            FileUploader
        ) {
            $scope.uploadingMessage = 'Uploading';

            var uploadingMessages = [
                'Reticulating splines',
                'Starting subpixel analysis',
                'Queuing elevator music'
            ];

            $interval(function() {
                $scope.uploadingMessage = uploadingMessages[Math.floor(Math.random() * uploadingMessages.length)];
            }, 5000);

            $scope.uploader = new FileUploader({
                url: '/api/v1/gifs',
                filters: [{
                    name: 'imageFilter',
                    fn: function(file, options) {
                        var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                        return '|gif|'.indexOf(type) !== -1;
                    }
                }],
                autoUpload: true,
                onSuccessItem: function(fileItem, response, status, headers) {
                    $window.location.href = '/' + response.data.gif.shortcode;
                },
                onErrorItem: function(fileItem, response, status, headers) {
                    console.info('onErrorItem', fileItem, response, status, headers);
                }
            });
        }
    ]);
