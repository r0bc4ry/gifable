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
                if (!$scope.tagDialog.newTag || $scope.addingTag) {
                    return false;
                }

                $scope.addingTag = true;

                $http.post('/api/v1/gifs/' + $scope.gif.shortcode + '/tags', {
                    tag: $scope.tagDialog.newTag
                }).then(function(response) {
                    if ($scope.gif.tags.length < 20) {
                        $scope.gif.tags.push({
                            tag: $scope.tagDialog.newTag.toLowerCase()
                        });
                    }
                    ngDialog.closeAll();
                }, function(error) {
                    console.log(error);
                }).then(function() {
                    $scope.addingTag = false;
                });
            };
        }
    ]);
