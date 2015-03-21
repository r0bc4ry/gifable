'use strict';

angular.module('gifable.app.controllers')
    .controller('IndexController', [
        '$document',
        '$interval',
        '$q',
        '$scope',
        '$templateCache',
        '$window',
        function(
            $document,
            $interval,
            $q,
            $scope,
            $templateCache,
            $window
        ) {
            $scope.gifs = $window.$gifs;
        }
    ]);
