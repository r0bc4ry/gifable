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
            $scope.ngRepeatStartedDeferred = $q.defer();





            $scope.ngRepeatStartedDeferred.promise.then(function() {
                _getGifTileDimensions();
            });

            angular.element($window).bind('resize', function() {
                _getGifTileDimensions();
            });
        }
    ]);
