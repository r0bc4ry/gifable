'use strict';

angular.module('gifable.app.directives')
    .directive('gifableIndexHeader', function() {
        return {
            scope: {},
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'components/index/gifable-index-header/gifable-index-header.html'
        };
    });
