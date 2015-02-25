'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'shared/gifable-file-input/gifable-file-input.html'
        };
    });
