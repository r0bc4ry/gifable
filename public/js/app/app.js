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

            var uploadingMessages = [
                'Reticulating splines',
                'Starting subpixel analysis',
                'Queuing elevator music'
            ];

            $interval(function() {
                $scope.uploadingMessage = uploadingMessages[Math.floor(Math.random() * uploadingMessages.length)];
            }, 5000);

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
        '$upload',
        '$window',
        function(
            $upload,
            $window
        ) {
            return {
                restrict: 'AE',
                replace: 'true',
                templateUrl: 'shared/gifable-file-input/gifable-file-input.html',
                link: function(scope, elem, attrs) {
                    scope.upload = function(files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                $upload.upload({
                                    url: 'api/v1/gifs',
                                    file: file
                                }).progress(function(evt) {
                                    console.log(scope.file);
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    scope.progressPercentage = progressPercentage;
                                }).success(function(data, status, headers, config) {
                                    $window.location.href = '/' + data.data.gif.shortcode;
                                }).error(function(data, status, headers, config) {
                                    console.log(data);
                                });
                            }
                        }
                    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2luZGV4LWNvbnRyb2xsZXIuanMiLCJzaGFyZWQvZ2lmYWJsZS1maWxlLWlucHV0L2dpZmFibGUtZmlsZS1pbnB1dC5qcyIsInNoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2dpZmFibGUtcmVwZWF0LWV2ZW50cy9naWZhYmxlLXJlcGVhdC1ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwJywgW1xyXG4gICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgLy8gVGhpcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgJ2FuZ3VsYXJGaWxlVXBsb2FkJyxcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLnRlbXBsYXRlcydcclxuXSkuY29uZmlnKFtcIiRzY2VEZWxlZ2F0ZVByb3ZpZGVyXCIsIGZ1bmN0aW9uKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICAgJ3NlbGYnLFxyXG4gICAgICAgICdodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vKionLFxyXG4gICAgICAgICdodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vKionXHJcbiAgICBdKTtcclxufV0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmNvbnRyb2xsZXJzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycsIFtdKTtcclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLnRlbXBsYXRlcycsIFtdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAnKVxyXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hcGknLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdEb2N1bWVudGF0aW9uQ29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0RvY3VtZW50YXRpb25Db250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5wb3N0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZpbGU6IFwidGVzdFwiXHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBvc3RSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZTogXCJnZG91MnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0UmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IFwiZ2RvdTJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJGRvY3VtZW50JyxcclxuICAgICAgICAnJGludGVydmFsJyxcclxuICAgICAgICAnJHEnLFxyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckdGVtcGxhdGVDYWNoZScsXHJcbiAgICAgICAgJyR3aW5kb3cnLFxyXG4gICAgICAgIGZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAkZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHEsXHJcbiAgICAgICAgICAgICRzY29wZSxcclxuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUsXHJcbiAgICAgICAgICAgICR3aW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdpZnMgPSAkd2luZG93LiRnaWZzO1xyXG4gICAgICAgICAgICAkc2NvcGUubmdSZXBlYXRTdGFydGVkRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpbGVXaWR0aCA9IDI0NjtcclxuICAgICAgICAgICAgdmFyIHRpbGVIZWlnaHQgPSAyNDY7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBsb2FkaW5nTWVzc2FnZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAnUmV0aWN1bGF0aW5nIHNwbGluZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1N0YXJ0aW5nIHN1YnBpeGVsIGFuYWx5c2lzJyxcclxuICAgICAgICAgICAgICAgICdRdWV1aW5nIGVsZXZhdG9yIG11c2ljJ1xyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgJGludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVwbG9hZGluZ01lc3NhZ2UgPSB1cGxvYWRpbmdNZXNzYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cGxvYWRpbmdNZXNzYWdlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVUb0dpZiA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nICsgZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb1dpZHRoID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZXaWR0aCA8PSBnaWZIZWlnaHQgPyB0aWxlV2lkdGggKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvSGVpZ2h0ID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZIZWlnaHQgPCBnaWZXaWR0aCA/IHRpbGVIZWlnaHQgKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvVG9wID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnaWZIZWlnaHQgPD0gZ2lmV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9ICh0aWxlV2lkdGggLyBnaWZXaWR0aCkgKiBnaWZIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0oKGFkanVzdGVkSGVpZ2h0IC0gdGlsZVdpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb0xlZnQgPSBmdW5jdGlvbihnaWYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZXaWR0aCA9IHBhcnNlSW50KGdpZi53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmSGVpZ2h0ID0gcGFyc2VJbnQoZ2lmLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZldpZHRoIDw9IGdpZkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSAodGlsZUhlaWdodCAvIGdpZkhlaWdodCkgKiBnaWZXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLSgoYWRqdXN0ZWRXaWR0aCAtIHRpbGVXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGxheUdpZiA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGF1c2VHaWYgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRHaWZUaWxlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZlRpbGUgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZi10aWxlJykpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGlsZVdpZHRoID0gZ2lmVGlsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRpbGVIZWlnaHQgPSBnaWZUaWxlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5uZ1JlcGVhdFN0YXJ0ZWREZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVGaWxlSW5wdXQnLCBbXHJcbiAgICAgICAgJyR1cGxvYWQnLFxyXG4gICAgICAgICckd2luZG93JyxcclxuICAgICAgICBmdW5jdGlvbihcclxuICAgICAgICAgICAgJHVwbG9hZCxcclxuICAgICAgICAgICAgJHdpbmRvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWZpbGUtaW5wdXQvZ2lmYWJsZS1maWxlLWlucHV0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBsb2FkID0gZnVuY3Rpb24oZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVwbG9hZC51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdhcGkvdjEvZ2lmcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm9ncmVzcyhmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBwYXJzZUludCgxMDAuMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9ncmVzc1BlcmNlbnRhZ2UgPSBwcm9ncmVzc1BlcmNlbnRhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLycgKyBkYXRhLmRhdGEuZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVIZWFkZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY29wZToge30sXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQUUnLFxyXG4gICAgICAgICAgICByZXBsYWNlOiAndHJ1ZScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2hhcmVkL2dpZmFibGUtaGVhZGVyL2dpZmFibGUtaGVhZGVyLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlSW5kZXhIZWFkZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVSZXBlYXRFdmVudHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGlmIChzY29wZS4kZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLm5nUmVwZWF0U3RhcnRlZERlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9