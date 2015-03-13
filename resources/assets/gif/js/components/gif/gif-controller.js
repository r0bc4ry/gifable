'use strict';

angular.module('gifable.gif.controllers')
    .controller('GifController', [
        '$http',
        '$scope',
        '$window',

        'ngDialog',
        function(
            $http,
            $scope,
            $window,

            ngDialog
        ) {
            $scope.tagDialog = {};
            $scope.gif = $window.$gif;

            $scope.onTagClick = function(tag) {
                $window.location.href = '/#/search?q=' + tag;
            };

            $scope.showTagDialog = function() {
                $scope.tagDialog.newTag = '';

                ngDialog.open({
                    template: 'components/gif/add-tag-dialog.html',
                    scope: $scope
                });
            };

            $scope.tagDialog.addTag = function() {
                $http.post('/api/v1/gifs/' + $scope.gif.shortcode + '/tags', {
                    tag: $scope.tagDialog.newTag
                }).success(function() {
                    if ($scope.gif.tags.length < 20) {
                        $scope.gif.tags.push({
                            tag: $scope.tagDialog.newTag
                        });
                    }
                    ngDialog.closeAll();
                }).error(function() {

                });
            };
        }
    ]);
