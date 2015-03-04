'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', [
        '$interval',
        '$upload',
        '$window',
        function(
            $interval,
            $upload,
            $window
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-file-input/gifable-file-input.html',
                link: function(scope, elem, attrs) {
                    var loadingMessages = [
                        'Reticulating splines',
                        'Analyzing subpixels',
                        'Adding more JPEG',
                        'Downloading RAM',
                    ];

                    var _getNewLoadingMessage = function() {
                        var randomNumber = Math.floor(Math.random() * loadingMessages.length);
                        while (loadingMessages[randomNumber] === scope.loadingMessage) {
                            randomNumber = Math.floor(Math.random() * loadingMessages.length);
                        }
                        scope.loadingMessage = loadingMessages[randomNumber];
                    };

                    var loadingMessageInterval;
                    scope.upload = function(files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                $upload.upload({
                                    url: 'api/v1/gifs',
                                    file: file
                                }).progress(function(evt) {
                                    scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                                    if (scope.progressPercentage === 100 && !angular.isDefined(loadingMessageInterval)) {
                                        _getNewLoadingMessage();
                                        loadingMessageInterval = $interval(function() {
                                            _getNewLoadingMessage();
                                        }, 5000);
                                    }
                                }).success(function(data, status, headers, config) {
                                    $window.location.href = '/' + data.data.gif.shortcode;
                                }).error(function(data, status, headers, config) {
                                    console.log(data);
                                });
                            }
                        }
                    };

                    scope.$on('$destroy', function() {
                        if (angular.isDefined(loadingMessageInterval)) {
                            $interval.cancel(loadingMessageInterval);
                            loadingMessageInterval = undefined;
                        }
                    });
                }
            };
        }
    ]);
