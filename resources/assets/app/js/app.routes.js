'use strict';

angular.module('gifable.app')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'components/index/index.html',
            controller: 'IndexController'
        });

        $routeProvider.when('/api', {
            templateUrl: 'components/documentation/documentation.html',
            controller: 'DocumentationController'
        });

        $routeProvider.when('/search', {
            templateUrl: 'components/search/search.html',
            controller: 'SearchController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
