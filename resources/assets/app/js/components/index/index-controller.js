'use strict';

angular.module('gifable.app.controllers')
    .controller('IndexController', [
        '$document',
        '$interval',
        '$q',
        '$scope',
        '$templateCache',
        '$window',

        'FileUploader',
        function(
            $document,
            $interval,
            $q,
            $scope,
            $templateCache,
            $window,

            FileUploader
        ) {
            $scope.gifs = $window.$gifs;
            $scope.ngRepeatStartedDeferred = $q.defer();

            var tileWidth = 246;
            var tileHeight = 246;

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

            $scope.navigateToGif = function(gif) {
                $window.location.href = '/' + gif.shortcode;
            };

            $scope.calculateVideoWidth = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                return gifWidth <= gifHeight ? tileWidth + 'px' : 'auto';
            };

            $scope.calculateVideoHeight = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                return gifHeight < gifWidth ? tileHeight + 'px' : 'auto';
            };

            $scope.calculateVideoTop = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                if (gifHeight <= gifWidth) {
                    return 0 + 'px';
                } else {
                    var adjustedHeight = (tileWidth / gifWidth) * gifHeight;
                    return -((adjustedHeight - tileWidth) / 2) + 'px';
                }
            };

            $scope.calculateVideoLeft = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                if (gifWidth <= gifHeight) {
                    return 0 + 'px';
                } else {
                    var adjustedWidth = (tileHeight / gifHeight) * gifWidth;
                    return -((adjustedWidth - tileWidth) / 2) + 'px';
                }
            };

            $scope.playGif = function($event) {
                $event.target.play();
            };

            $scope.pauseGif = function($event) {
                $event.target.pause();
                $event.target.currentTime = 0;
            };

            var _getGifTileDimensions = function() {
                var gifTile = angular.element(document.querySelector('.gif-tile'))[0];
                tileWidth = gifTile.offsetWidth;
                tileHeight = gifTile.offsetHeight;
            };

            $scope.ngRepeatStartedDeferred.promise.then(function() {
                _getGifTileDimensions();
            });

            angular.element($window).bind('resize', function() {
                _getGifTileDimensions();
            });
        }
    ]);
