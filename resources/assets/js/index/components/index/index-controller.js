'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$scope',
        '$window',
        'FileUploader',
        function (
            $scope,
            $window,
            FileUploader
        ) {
            $scope.fileUploader = new FileUploader({
                url: '/transcode',
                formData: [{
                    _token: $window._token
                }],
                filters: [{
                    name: 'imageFilter',
                    fn: function(item, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|gif|'.indexOf(type) !== -1;
                    }
                }],
                autoUpload: true
            });

            $scope.fileUploader.onSuccessItem(function(fileItem, response, status, headers) {
                console.log(response);
            });

            $scope.fileUploader.onErrorItem(function(fileItem, response, status, headers) {
                console.log(response);
            });
        }
    ]);
