'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$interval',
        '$scope',
        '$templateCache',
        '$window',
        function (
            $interval,
            $scope,
            $templateCache,
            $window
        ) {
            var loadingMessages = [
                'Test 1',
                'Test 2',
                'Test 3',
                'Test 4',
                'Test 5'
            ];

            $interval(function() {
                $scope.testCode = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
            }, 2000);

            var dropzone = new Dropzone('div#gifable-dropzone', {
                url: '/api/v1/gifs',
                maxFilesize: 100,
                uploadMultiple: false,
                maxFiles: 1,
                acceptedFiles: 'image/gif',
                previewTemplate: $templateCache.get('components/index/dropzone/preview.html'),
                dictDefaultMessage: $templateCache.get('components/index/dropzone/default-message.html')
            });

            dropzone.on('error', function(file, error) {
                $scope.error = error;
            });

            dropzone.on('success', function(file, response) {
                $window.location.href = '/' + response.data.gif.shortcode;
            });
        }
    ]);
