'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$scope',
        function (
            $scope
        ) {
            Dropzone.options.myAwesomeDropzone = {
                url: "/transcode",
                maxFilesize: 100,
                acceptedFiles: "image/gif",
                dictDefaultMessage: "Your mom"
            };
        }
    ]);
