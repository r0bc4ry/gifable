'use strict';

angular.module('gifable.index.directives')
    .directive('customFileUploader', function() {
        return {
            scope: {
                uploader: '='
            },
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'shared/custom-file-uploader/custom-file-uploader.html'
        };
    });
