'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', [
        '$upload',
        '$window',
        function(
            $upload,
            $window
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-file-input/gifable-file-input.html',
                link: function(scope, elem, attrs) {
                    scope.upload = function(files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                $upload.upload({
                                    url: 'api/v1/gifs',
                                    file: file
                                }).progress(function(evt) {
                                    console.log(scope.file);
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    scope.progressPercentage = progressPercentage;
                                }).success(function(data, status, headers, config) {
                                    $window.location.href = '/' + data.data.gif.shortcode;
                                }).error(function(data, status, headers, config) {
                                    console.log(data);
                                });
                            }
                        }
                    };
                }
            };
        }
    ]);
