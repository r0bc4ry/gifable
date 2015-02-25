'use strict';

angular.module('gifable.app.directives')
    .directive('gifableRepeatEvents', function() {
        return function(scope, element, attrs) {
            if (scope.$first) {
                scope.ngRepeatStartedDeferred.resolve();
            }
        };
    });
