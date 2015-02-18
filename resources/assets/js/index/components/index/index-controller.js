'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$scope',
        function (
            $scope
        ) {
            var defaultMessageTemplate = '' +
                '<img src="/img/index-upload.png">' +
                '<h3>DRAG &amp DROP</h3>';

            Dropzone.options.myAwesomeDropzone = {
                url: "/transcode",
                maxFilesize: 100,
                acceptedFiles: "image/gif",
                dictDefaultMessage: defaultMessageTemplate
            };
        }
    ]);
