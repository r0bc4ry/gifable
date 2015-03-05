'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', [
        '$upload',
        '$window',

        'ngDialog',
        function(
            $upload,
            $window,

            ngDialog
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-file-input/gifable-file-input.html',
                link: function(scope, elem, attrs) {
                    scope.onFileChange = function(files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                $upload.upload({
                                    url: 'api/v1/gifs',
                                    file: file
                                }).progress(function(evt) {
                                    scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                }).success(function(data, status, headers, config) {
                                    $window.location.href = '/' + data.data.gif.shortcode;
                                }).error(function(data, status, headers, config) {
                                    scope.errorMessage = data.message;

                                    ngDialog.open({
                                        template: 'shared/gifable-file-input/gifable-file-input-error-dialog.html',
                                        scope: scope
                                    });

                                    scope.files = undefined;
                                });
                            }
                        }
                    };
                }
            };
        }
    ]);
