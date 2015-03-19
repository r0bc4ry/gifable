'use strict';

angular.module('gifable.app.directives')
    .directive('gifableIndexHeader', [
        '$location',
        function(
            $location
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'components/index/gifable-index-header/gifable-index-header.html',
                link: function(scope, element, attrs) {
                    scope.onSearch = function() {
                        if (scope.searchValue) {
                            $location.path('/search').search({ q: scope.searchValue });
                        }
                    };
                }
            };
        }
    ]);
