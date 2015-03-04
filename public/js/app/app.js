'use strict';

angular.module('gifable.app', [
    // Angular modules
    'ngRoute',

    // Third-party modules
    'angularFileUpload',

    // Application modules
    'gifable.app.controllers',
    'gifable.app.directives',
    'gifable.app.templates'
]).config(["$sceDelegateProvider", function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**',
        'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**'
    ]);
}]);

angular.module('gifable.app.controllers', []);
angular.module('gifable.app.directives', []);
angular.module('gifable.app.templates', []);
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

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

'use strict';

angular.module('gifable.app.controllers')
    .controller('DocumentationController', [
        '$scope',
        function (
            $scope
        ) {
            $scope.postData = JSON.stringify({
                file: "test"
            }, null, 4);

            $scope.postResponse = JSON.stringify({
                status: "success",
                data: {
                    gif: {
                        shortcode: "gdou2y",
                        width: "640",
                        height: "353",
                        gif_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.gif",
                        gif_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.gif",
                        webm_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.webm",
                        webm_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.webm",
                        mp4_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.mp4",
                        mp4_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.mp4",
                        created_at: "2015-02-17 03:08:01",
                        updated_at: "2015-02-17 03:08:01"
                    }
                }
            }, null, 4);

            $scope.getResponse = JSON.stringify({
                status: "success",
                data: {
                    gif: {
                        shortcode: "gdou2y",
                        width: "640",
                        height: "353",
                        gif_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.gif",
                        gif_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.gif",
                        webm_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.webm",
                        webm_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.webm",
                        mp4_http_url: "http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/gdou2y.mp4",
                        mp4_https_url: "https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/gdou2y.mp4",
                        created_at: "2015-02-17 03:08:01",
                        updated_at: "2015-02-17 03:08:01"
                    }
                }
            }, null, 4);
        }
    ]);

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

            var tileWidth = 246;
            var tileHeight = 246;

            $scope.navigateToGif = function(gif) {
                $window.location.href = '/' + gif.shortcode;
            };

            $scope.calculateVideoWidth = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                return gifWidth <= gifHeight ? tileWidth + 'px' : 'auto';
            };

            $scope.calculateVideoHeight = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                return gifHeight < gifWidth ? tileHeight + 'px' : 'auto';
            };

            $scope.calculateVideoTop = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                if (gifHeight <= gifWidth) {
                    return 0 + 'px';
                } else {
                    var adjustedHeight = (tileWidth / gifWidth) * gifHeight;
                    return -((adjustedHeight - tileWidth) / 2) + 'px';
                }
            };

            $scope.calculateVideoLeft = function(gif) {
                var gifWidth = parseInt(gif.width);
                var gifHeight = parseInt(gif.height);

                if (gifWidth <= gifHeight) {
                    return 0 + 'px';
                } else {
                    var adjustedWidth = (tileHeight / gifHeight) * gifWidth;
                    return -((adjustedWidth - tileWidth) / 2) + 'px';
                }
            };

            $scope.playGif = function($event) {
                $event.target.play();
            };

            $scope.pauseGif = function($event) {
                $event.target.pause();
                $event.target.currentTime = 0;
            };

            var _getGifTileDimensions = function() {
                var gifTile = angular.element(document.querySelector('.gif-tile'))[0];
                tileWidth = gifTile.offsetWidth;
                tileHeight = gifTile.offsetHeight;
            };

            $scope.ngRepeatStartedDeferred.promise.then(function() {
                _getGifTileDimensions();
            });

            angular.element($window).bind('resize', function() {
                _getGifTileDimensions();
            });
        }
    ]);

'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', [
        '$interval',
        '$upload',
        '$window',
        function(
            $interval,
            $upload,
            $window
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-file-input/gifable-file-input.html',
                link: function(scope, elem, attrs) {
                    var loadingMessages = [
                        'Reticulating splines',
                        'Completing subpixel analysis',
                        'Adding more JPEG',
                        'Downloading more RAM',
                        'Sprinkling pixie dust',
                    ];

                    var _getNewLoadingMessage = function() {
                        var randomNumber = Math.floor(Math.random() * loadingMessages.length);
                        while (loadingMessages[randomNumber] === scope.loadingMessage) {
                            randomNumber = Math.floor(Math.random() * loadingMessages.length);
                        }
                        scope.loadingMessage = loadingMessages[randomNumber];
                    };

                    var loadingMessageInterval;
                    scope.upload = function(files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                $upload.upload({
                                    url: 'api/v1/gifs',
                                    file: file
                                }).progress(function(evt) {
                                    scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

                                    if (scope.progressPercentage === 100 && !angular.isDefined(loadingMessageInterval)) {
                                        _getNewLoadingMessage();
                                        loadingMessageInterval = $interval(function() {
                                            _getNewLoadingMessage();
                                        }, 5000);
                                    }
                                }).success(function(data, status, headers, config) {
                                    $window.location.href = '/' + data.data.gif.shortcode;
                                }).error(function(data, status, headers, config) {
                                    console.log(data);
                                });
                            }
                        }
                    };

                    scope.$on('$destroy', function() {
                        if (angular.isDefined(loadingMessageInterval)) {
                            $interval.cancel(loadingMessageInterval);
                            loadingMessageInterval = undefined;
                        }
                    });
                }
            };
        }
    ]);

'use strict';

angular.module('gifable.app.directives')
    .directive('gifableHeader', function() {
        return {
            scope: {},
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'shared/gifable-header/gifable-header.html'
        };
    });

'use strict';

angular.module('gifable.app.directives')
    .directive('gifableIndexHeader', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'components/index/gifable-index-header/gifable-index-header.html'
        };
    });

'use strict';

angular.module('gifable.app.directives')
    .directive('gifableRepeatEvents', function() {
        return function(scope, element, attrs) {
            if (scope.$first) {
                scope.ngRepeatStartedDeferred.resolve();
            }
        };
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2luZGV4LWNvbnRyb2xsZXIuanMiLCJzaGFyZWQvZ2lmYWJsZS1maWxlLWlucHV0L2dpZmFibGUtZmlsZS1pbnB1dC5qcyIsInNoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2dpZmFibGUtcmVwZWF0LWV2ZW50cy9naWZhYmxlLXJlcGVhdC1ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwJywgW1xyXG4gICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgLy8gVGhpcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgJ2FuZ3VsYXJGaWxlVXBsb2FkJyxcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLnRlbXBsYXRlcydcclxuXSkuY29uZmlnKFtcIiRzY2VEZWxlZ2F0ZVByb3ZpZGVyXCIsIGZ1bmN0aW9uKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICAgJ3NlbGYnLFxyXG4gICAgICAgICdodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vKionLFxyXG4gICAgICAgICdodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vKionXHJcbiAgICBdKTtcclxufV0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmNvbnRyb2xsZXJzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycsIFtdKTtcclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLnRlbXBsYXRlcycsIFtdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAnKVxyXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hcGknLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEb2N1bWVudGF0aW9uQ29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0RvY3VtZW50YXRpb25Db250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5wb3N0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZpbGU6IFwidGVzdFwiXHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBvc3RSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZTogXCJnZG91MnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0UmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IFwiZ2RvdTJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJGRvY3VtZW50JyxcclxuICAgICAgICAnJGludGVydmFsJyxcclxuICAgICAgICAnJHEnLFxyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckdGVtcGxhdGVDYWNoZScsXHJcbiAgICAgICAgJyR3aW5kb3cnLFxyXG4gICAgICAgIGZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAkZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHEsXHJcbiAgICAgICAgICAgICRzY29wZSxcclxuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUsXHJcbiAgICAgICAgICAgICR3aW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdpZnMgPSAkd2luZG93LiRnaWZzO1xyXG4gICAgICAgICAgICAkc2NvcGUubmdSZXBlYXRTdGFydGVkRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpbGVXaWR0aCA9IDI0NjtcclxuICAgICAgICAgICAgdmFyIHRpbGVIZWlnaHQgPSAyNDY7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVUb0dpZiA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nICsgZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb1dpZHRoID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZXaWR0aCA8PSBnaWZIZWlnaHQgPyB0aWxlV2lkdGggKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvSGVpZ2h0ID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZIZWlnaHQgPCBnaWZXaWR0aCA/IHRpbGVIZWlnaHQgKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvVG9wID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnaWZIZWlnaHQgPD0gZ2lmV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9ICh0aWxlV2lkdGggLyBnaWZXaWR0aCkgKiBnaWZIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0oKGFkanVzdGVkSGVpZ2h0IC0gdGlsZVdpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb0xlZnQgPSBmdW5jdGlvbihnaWYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZXaWR0aCA9IHBhcnNlSW50KGdpZi53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmSGVpZ2h0ID0gcGFyc2VJbnQoZ2lmLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZldpZHRoIDw9IGdpZkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSAodGlsZUhlaWdodCAvIGdpZkhlaWdodCkgKiBnaWZXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLSgoYWRqdXN0ZWRXaWR0aCAtIHRpbGVXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGxheUdpZiA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGF1c2VHaWYgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRHaWZUaWxlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZlRpbGUgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZi10aWxlJykpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGlsZVdpZHRoID0gZ2lmVGlsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRpbGVIZWlnaHQgPSBnaWZUaWxlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5uZ1JlcGVhdFN0YXJ0ZWREZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVGaWxlSW5wdXQnLCBbXHJcbiAgICAgICAgJyRpbnRlcnZhbCcsXHJcbiAgICAgICAgJyR1cGxvYWQnLFxyXG4gICAgICAgICckd2luZG93JyxcclxuICAgICAgICBmdW5jdGlvbihcclxuICAgICAgICAgICAgJGludGVydmFsLFxyXG4gICAgICAgICAgICAkdXBsb2FkLFxyXG4gICAgICAgICAgICAkd2luZG93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2U6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2hhcmVkL2dpZmFibGUtZmlsZS1pbnB1dC9naWZhYmxlLWZpbGUtaW5wdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbSwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ01lc3NhZ2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnUmV0aWN1bGF0aW5nIHNwbGluZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29tcGxldGluZyBzdWJwaXhlbCBhbmFseXNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBZGRpbmcgbW9yZSBKUEVHJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Rvd25sb2FkaW5nIG1vcmUgUkFNJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Nwcmlua2xpbmcgcGl4aWUgZHVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9nZXROZXdMb2FkaW5nTWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbG9hZGluZ01lc3NhZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsb2FkaW5nTWVzc2FnZXNbcmFuZG9tTnVtYmVyXSA9PT0gc2NvcGUubG9hZGluZ01lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvYWRpbmdNZXNzYWdlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmxvYWRpbmdNZXNzYWdlID0gbG9hZGluZ01lc3NhZ2VzW3JhbmRvbU51bWJlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBsb2FkID0gZnVuY3Rpb24oZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVwbG9hZC51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdhcGkvdjEvZ2lmcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm9ncmVzcyhmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvZ3Jlc3NQZXJjZW50YWdlID0gcGFyc2VJbnQoMTAwLjAgKiBldnQubG9hZGVkIC8gZXZ0LnRvdGFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5wcm9ncmVzc1BlcmNlbnRhZ2UgPT09IDEwMCAmJiAhYW5ndWxhci5pc0RlZmluZWQobG9hZGluZ01lc3NhZ2VJbnRlcnZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXROZXdMb2FkaW5nTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VJbnRlcnZhbCA9ICRpbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0TmV3TG9hZGluZ01lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLycgKyBkYXRhLmRhdGEuZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW50ZXJ2YWwuY2FuY2VsKGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ01lc3NhZ2VJbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlSGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnKVxyXG4gICAgLmRpcmVjdGl2ZSgnZ2lmYWJsZUluZGV4SGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6ICd0cnVlJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2luZGV4L2dpZmFibGUtaW5kZXgtaGVhZGVyL2dpZmFibGUtaW5kZXgtaGVhZGVyLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlUmVwZWF0RXZlbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGUuJGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5uZ1JlcGVhdFN0YXJ0ZWREZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==