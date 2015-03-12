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
            $scope.tagDialog = {};
            $scope.tags = $window.$tags;

            $scope.showTagDialog = function() {
                $scope.tagDialog.newTag = '';

                ngDialog.open({
                    template: 'components/gif/add-tag-dialog.html',
                    scope: $scope
                });
            };

            $scope.tagDialog.addTag = function() {
                console.log($scope.tagDialog.newTag);
                ngDialog.closeAll();
            };
        }
    ]);
