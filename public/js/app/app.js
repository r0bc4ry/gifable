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
                        'Analyzing subpixels',
                        'Adding more JPEG',
                        'Downloading RAM',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2luZGV4LWNvbnRyb2xsZXIuanMiLCJzaGFyZWQvZ2lmYWJsZS1maWxlLWlucHV0L2dpZmFibGUtZmlsZS1pbnB1dC5qcyIsInNoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2dpZmFibGUtcmVwZWF0LWV2ZW50cy9naWZhYmxlLXJlcGVhdC1ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcCcsIFtcclxuICAgIC8vIEFuZ3VsYXIgbW9kdWxlc1xyXG4gICAgJ25nUm91dGUnLFxyXG5cclxuICAgIC8vIFRoaXJkLXBhcnR5IG1vZHVsZXNcclxuICAgICdhbmd1bGFyRmlsZVVwbG9hZCcsXHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gbW9kdWxlc1xyXG4gICAgJ2dpZmFibGUuYXBwLmNvbnRyb2xsZXJzJyxcclxuICAgICdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJyxcclxuICAgICdnaWZhYmxlLmFwcC50ZW1wbGF0ZXMnXHJcbl0pLmNvbmZpZyhbXCIkc2NlRGVsZWdhdGVQcm92aWRlclwiLCBmdW5jdGlvbigkc2NlRGVsZWdhdGVQcm92aWRlcikge1xyXG4gICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xyXG4gICAgICAgICdzZWxmJyxcclxuICAgICAgICAnaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tLyoqJyxcclxuICAgICAgICAnaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tLyoqJ1xyXG4gICAgXSk7XHJcbn1dKTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5jb250cm9sbGVycycsIFtdKTtcclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC50ZW1wbGF0ZXMnLCBbXSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwJylcclxuICAgIC5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2luZGV4L2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSW5kZXhDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvYXBpJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnRG9jdW1lbnRhdGlvbkNvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcclxuICAgIH1dKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmNvbnRyb2xsZXJzJylcclxuICAgIC5jb250cm9sbGVyKCdEb2N1bWVudGF0aW9uQ29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBmaWxlOiBcInRlc3RcIlxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wb3N0UmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IFwiZ2RvdTJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldFJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBnaWY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiBcImdkb3UyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2NDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmNvbnRyb2xsZXJzJylcclxuICAgIC5jb250cm9sbGVyKCdJbmRleENvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRkb2N1bWVudCcsXHJcbiAgICAgICAgJyRpbnRlcnZhbCcsXHJcbiAgICAgICAgJyRxJyxcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICAnJHRlbXBsYXRlQ2FjaGUnLFxyXG4gICAgICAgICckd2luZG93JyxcclxuICAgICAgICBmdW5jdGlvbihcclxuICAgICAgICAgICAgJGRvY3VtZW50LFxyXG4gICAgICAgICAgICAkaW50ZXJ2YWwsXHJcbiAgICAgICAgICAgICRxLFxyXG4gICAgICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgICAgICR0ZW1wbGF0ZUNhY2hlLFxyXG4gICAgICAgICAgICAkd2luZG93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5naWZzID0gJHdpbmRvdy4kZ2lmcztcclxuICAgICAgICAgICAgJHNjb3BlLm5nUmVwZWF0U3RhcnRlZERlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aWxlV2lkdGggPSAyNDY7XHJcbiAgICAgICAgICAgIHZhciB0aWxlSGVpZ2h0ID0gMjQ2O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlVG9HaWYgPSBmdW5jdGlvbihnaWYpIHtcclxuICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJyArIGdpZi5zaG9ydGNvZGU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FsY3VsYXRlVmlkZW9XaWR0aCA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZldpZHRoID0gcGFyc2VJbnQoZ2lmLndpZHRoKTtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZIZWlnaHQgPSBwYXJzZUludChnaWYuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lmV2lkdGggPD0gZ2lmSGVpZ2h0ID8gdGlsZVdpZHRoICsgJ3B4JyA6ICdhdXRvJztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb0hlaWdodCA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZldpZHRoID0gcGFyc2VJbnQoZ2lmLndpZHRoKTtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZIZWlnaHQgPSBwYXJzZUludChnaWYuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lmSGVpZ2h0IDwgZ2lmV2lkdGggPyB0aWxlSGVpZ2h0ICsgJ3B4JyA6ICdhdXRvJztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb1RvcCA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZldpZHRoID0gcGFyc2VJbnQoZ2lmLndpZHRoKTtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZIZWlnaHQgPSBwYXJzZUludChnaWYuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lmSGVpZ2h0IDw9IGdpZldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRqdXN0ZWRIZWlnaHQgPSAodGlsZVdpZHRoIC8gZ2lmV2lkdGgpICogZ2lmSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtKChhZGp1c3RlZEhlaWdodCAtIHRpbGVXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FsY3VsYXRlVmlkZW9MZWZ0ID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnaWZXaWR0aCA8PSBnaWZIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gKHRpbGVIZWlnaHQgLyBnaWZIZWlnaHQpICogZ2lmV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0oKGFkanVzdGVkV2lkdGggLSB0aWxlV2lkdGgpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBsYXlHaWYgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQucGxheSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhdXNlR2lmID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0R2lmVGlsZURpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZUaWxlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWYtdGlsZScpKVswXTtcclxuICAgICAgICAgICAgICAgIHRpbGVXaWR0aCA9IGdpZlRpbGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aWxlSGVpZ2h0ID0gZ2lmVGlsZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUubmdSZXBlYXRTdGFydGVkRGVmZXJyZWQucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgX2dldEdpZlRpbGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgX2dldEdpZlRpbGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlRmlsZUlucHV0JywgW1xyXG4gICAgICAgICckaW50ZXJ2YWwnLFxyXG4gICAgICAgICckdXBsb2FkJyxcclxuICAgICAgICAnJHdpbmRvdycsXHJcbiAgICAgICAgZnVuY3Rpb24oXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHVwbG9hZCxcclxuICAgICAgICAgICAgJHdpbmRvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWZpbGUtaW5wdXQvZ2lmYWJsZS1maWxlLWlucHV0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdNZXNzYWdlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JldGljdWxhdGluZyBzcGxpbmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FuYWx5emluZyBzdWJwaXhlbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWRkaW5nIG1vcmUgSlBFRycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdEb3dubG9hZGluZyBSQU0nLFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfZ2V0TmV3TG9hZGluZ01lc3NhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvYWRpbmdNZXNzYWdlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobG9hZGluZ01lc3NhZ2VzW3JhbmRvbU51bWJlcl0gPT09IHNjb3BlLmxvYWRpbmdNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsb2FkaW5nTWVzc2FnZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5sb2FkaW5nTWVzc2FnZSA9IGxvYWRpbmdNZXNzYWdlc1tyYW5kb21OdW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nTWVzc2FnZUludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uKGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1cGxvYWQudXBsb2FkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL3YxL2dpZnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkucHJvZ3Jlc3MoZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb2dyZXNzUGVyY2VudGFnZSA9IHBhcnNlSW50KDEwMC4wICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUucHJvZ3Jlc3NQZXJjZW50YWdlID09PSAxMDAgJiYgIWFuZ3VsYXIuaXNEZWZpbmVkKGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0TmV3TG9hZGluZ01lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWwgPSAkaW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dldE5ld0xvYWRpbmdNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nICsgZGF0YS5kYXRhLmdpZi5zaG9ydGNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChsb2FkaW5nTWVzc2FnZUludGVydmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGludGVydmFsLmNhbmNlbChsb2FkaW5nTWVzc2FnZUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNZXNzYWdlSW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnKVxyXG4gICAgLmRpcmVjdGl2ZSgnZ2lmYWJsZUhlYWRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6ICd0cnVlJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzaGFyZWQvZ2lmYWJsZS1oZWFkZXIvZ2lmYWJsZS1oZWFkZXIuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVJbmRleEhlYWRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQUUnLFxyXG4gICAgICAgICAgICByZXBsYWNlOiAndHJ1ZScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9naWZhYmxlLWluZGV4LWhlYWRlci9naWZhYmxlLWluZGV4LWhlYWRlci5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnKVxyXG4gICAgLmRpcmVjdGl2ZSgnZ2lmYWJsZVJlcGVhdEV2ZW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgaWYgKHNjb3BlLiRmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUubmdSZXBlYXRTdGFydGVkRGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=