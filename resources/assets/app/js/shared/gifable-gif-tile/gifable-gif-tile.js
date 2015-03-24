'use strict';

angular.module('gifable.app.directives')
    .directive('gifableGifTile', [
        '$window',
        function(
            $window
        ) {
            return {
                scope: {
                    gif: '=',
                    preload: '@'
                },
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-gif-tile/gifable-gif-tile.html',
                link: function (scope, elem, attrs) {
                    var tileWidth = elem.prop('offsetWidth');
                    var tileHeight = elem.prop('offsetHeight');

                    var video = elem[0].querySelector('.video');

                    scope.play = function() {
                        scope.playing = true;

                        video.play();
                    };

                    scope.pause = function() {
                        scope.playing = false;

                        video.pause();
                        video.currentTime = 0;
                    };

                    scope.onClick = function() {
                        $window.location.href = '/' + scope.gif.shortcode;
                    };

                    scope.calculateVideoWidth = function(gif) {
                        var gifWidth = parseInt(gif.width);
                        var gifHeight = parseInt(gif.height);

                        return (gifWidth <= gifHeight) ? tileWidth + 'px' : 'auto';
                    };

                    scope.calculateVideoHeight = function(gif) {
                        var gifWidth = parseInt(gif.width);
                        var gifHeight = parseInt(gif.height);

                        return (gifHeight < gifWidth) ? tileHeight + 'px' : 'auto';
                    };

                    scope.calculateVideoTop = function(gif) {
                        var gifWidth = parseInt(gif.width);
                        var gifHeight = parseInt(gif.height);

                        if (gifHeight < gifWidth) {
                            return 0 + 'px';
                        } else {
                            var adjustedHeight = (tileWidth / gifWidth) * gifHeight;
                            return -((adjustedHeight - tileHeight) / 2) + 'px';
                        }
                    };

                    scope.calculateVideoLeft = function(gif) {
                        var gifWidth = parseInt(gif.width);
                        var gifHeight = parseInt(gif.height);

                        if (gifWidth <= gifHeight) {
                            return 0 + 'px';
                        } else {
                            var adjustedWidth = (tileHeight / gifHeight) * gifWidth;
                            return -((adjustedWidth - tileWidth) / 2) + 'px';
                        }
                    };
                }
            }
        }
    ]);
