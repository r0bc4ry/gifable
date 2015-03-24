'use strict';

angular.module('gifable.app.controllers')
    .controller('SearchController', [
        '$http',
        '$routeParams',
        '$scope',
        function(
            $http,
            $routeParams,
            $scope
        ) {
            $scope.query = $routeParams.q;

            $http({
                url:'/api/v1/search',
                method: 'GET',
                params: {
                    q: $scope.query
                }
            }).success(function(response) {
                $scope.gifs = response.data.gifs;
            }).error(function(error) {
                console.log(error);
            });
        }
    ]);
