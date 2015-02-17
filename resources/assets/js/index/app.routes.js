'use strict';

angular.module('gifable.index')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'components/index/index.html',
            controller: 'IndexController'
        });

        $routeProvider.when('/about', {
            templateUrl: 'components/about/about.html',
            controller: 'AboutController'
        });

        $routeProvider.when('/api', {
            templateUrl: 'components/api/api.html',
            controller: 'ApiController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
