'use strict';

angular.module('gifable.index.directives')
    .directive('loadingAnimation', function() {
        return {
            scope: {},
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'shared/loading-animation/loading-animation.html'
        };
    });
