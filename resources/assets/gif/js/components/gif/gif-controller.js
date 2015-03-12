'use strict';

angular.module('gifable.gif.controllers')
    .controller('GifController', [
        '$scope',
        '$window',

        'ngDialog',
        function(
            $scope,
            $window,

            ngDialog
        ) {
            $scope.tags = $window.$tags;

            $scope.showTagDialog = function(message) {
                ngDialog.open({
                    template: 'components/gif/add-tag-dialog.html',
                    scope: $scope
                });
            };
        }
    ]);
