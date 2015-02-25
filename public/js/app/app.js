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

        'FileUploader',
        function(
            $document,
            $interval,
            $q,
            $scope,
            $templateCache,
            $window,

            FileUploader
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

            $scope.uploader = new FileUploader({
                url: '/api/v1/gifs',
                filters: [{
                    name: 'imageFilter',
                    fn: function(file, options) {
                        var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                        return '|gif|'.indexOf(type) !== -1;
                    }
                }],
                autoUpload: true,
                onSuccessItem: function(fileItem, response, status, headers) {
                    $window.location.href = '/' + response.data.gif.shortcode;
                },
                onErrorItem: function(fileItem, response, status, headers) {
                    console.info('onErrorItem', fileItem, response, status, headers);
                }
            });

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
    .directive('gifableFileInput', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'shared/gifable-file-input/gifable-file-input.html'
        };
    });

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2luZGV4LWNvbnRyb2xsZXIuanMiLCJzaGFyZWQvZ2lmYWJsZS1maWxlLWlucHV0L2dpZmFibGUtZmlsZS1pbnB1dC5qcyIsInNoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2dpZmFibGUtcmVwZWF0LWV2ZW50cy9naWZhYmxlLXJlcGVhdC1ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAnLCBbXHJcbiAgICAvLyBBbmd1bGFyIG1vZHVsZXNcclxuICAgICduZ1JvdXRlJyxcclxuXHJcbiAgICAvLyBUaGlyZC1wYXJ0eSBtb2R1bGVzXHJcbiAgICAnYW5ndWxhckZpbGVVcGxvYWQnLFxyXG5cclxuICAgIC8vIEFwcGxpY2F0aW9uIG1vZHVsZXNcclxuICAgICdnaWZhYmxlLmFwcC5jb250cm9sbGVycycsXHJcbiAgICAnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycsXHJcbiAgICAnZ2lmYWJsZS5hcHAudGVtcGxhdGVzJ1xyXG5dKS5jb25maWcoW1wiJHNjZURlbGVnYXRlUHJvdmlkZXJcIiwgZnVuY3Rpb24oJHNjZURlbGVnYXRlUHJvdmlkZXIpIHtcclxuICAgICRzY2VEZWxlZ2F0ZVByb3ZpZGVyLnJlc291cmNlVXJsV2hpdGVsaXN0KFtcclxuICAgICAgICAnc2VsZicsXHJcbiAgICAgICAgJ2h0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS8qKicsXHJcbiAgICAgICAgJ2h0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS8qKidcclxuICAgIF0pO1xyXG59XSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAudGVtcGxhdGVzJywgW10pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcCcpXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2FwaScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0RvY3VtZW50YXRpb25Db250cm9sbGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiAnLycgfSk7XHJcbiAgICB9XSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignRG9jdW1lbnRhdGlvbkNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAkc2NvcGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnBvc3REYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZmlsZTogXCJ0ZXN0XCJcclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucG9zdFJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBnaWY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiBcImdkb3UyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2NDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXRSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZTogXCJnZG91MnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckZG9jdW1lbnQnLFxyXG4gICAgICAgICckaW50ZXJ2YWwnLFxyXG4gICAgICAgICckcScsXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgJyR0ZW1wbGF0ZUNhY2hlJyxcclxuICAgICAgICAnJHdpbmRvdycsXHJcblxyXG4gICAgICAgICdGaWxlVXBsb2FkZXInLFxyXG4gICAgICAgIGZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAkZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHEsXHJcbiAgICAgICAgICAgICRzY29wZSxcclxuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUsXHJcbiAgICAgICAgICAgICR3aW5kb3csXHJcblxyXG4gICAgICAgICAgICBGaWxlVXBsb2FkZXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLmdpZnMgPSAkd2luZG93LiRnaWZzO1xyXG4gICAgICAgICAgICAkc2NvcGUubmdSZXBlYXRTdGFydGVkRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpbGVXaWR0aCA9IDI0NjtcclxuICAgICAgICAgICAgdmFyIHRpbGVIZWlnaHQgPSAyNDY7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBsb2FkaW5nTWVzc2FnZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAnUmV0aWN1bGF0aW5nIHNwbGluZXMnLFxyXG4gICAgICAgICAgICAgICAgJ1N0YXJ0aW5nIHN1YnBpeGVsIGFuYWx5c2lzJyxcclxuICAgICAgICAgICAgICAgICdRdWV1aW5nIGVsZXZhdG9yIG11c2ljJ1xyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgJGludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnVwbG9hZGluZ01lc3NhZ2UgPSB1cGxvYWRpbmdNZXNzYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1cGxvYWRpbmdNZXNzYWdlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdjEvZ2lmcycsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbWFnZUZpbHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZpbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSAnfCcgKyBmaWxlLnR5cGUuc2xpY2UoZmlsZS50eXBlLmxhc3RJbmRleE9mKCcvJykgKyAxKSArICd8JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd8Z2lmfCcuaW5kZXhPZih0eXBlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBhdXRvVXBsb2FkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzSXRlbTogZnVuY3Rpb24oZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLycgKyByZXNwb25zZS5kYXRhLmdpZi5zaG9ydGNvZGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FcnJvckl0ZW06IGZ1bmN0aW9uKGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdvbkVycm9ySXRlbScsIGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVUb0dpZiA9IGZ1bmN0aW9uKGdpZikge1xyXG4gICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nICsgZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb1dpZHRoID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZXaWR0aCA8PSBnaWZIZWlnaHQgPyB0aWxlV2lkdGggKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvSGVpZ2h0ID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnaWZIZWlnaHQgPCBnaWZXaWR0aCA/IHRpbGVIZWlnaHQgKyAncHgnIDogJ2F1dG8nO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbGN1bGF0ZVZpZGVvVG9wID0gZnVuY3Rpb24oZ2lmKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmV2lkdGggPSBwYXJzZUludChnaWYud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZkhlaWdodCA9IHBhcnNlSW50KGdpZi5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnaWZIZWlnaHQgPD0gZ2lmV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9ICh0aWxlV2lkdGggLyBnaWZXaWR0aCkgKiBnaWZIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0oKGFkanVzdGVkSGVpZ2h0IC0gdGlsZVdpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYWxjdWxhdGVWaWRlb0xlZnQgPSBmdW5jdGlvbihnaWYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnaWZXaWR0aCA9IHBhcnNlSW50KGdpZi53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2lmSGVpZ2h0ID0gcGFyc2VJbnQoZ2lmLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdpZldpZHRoIDw9IGdpZkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkanVzdGVkV2lkdGggPSAodGlsZUhlaWdodCAvIGdpZkhlaWdodCkgKiBnaWZXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLSgoYWRqdXN0ZWRXaWR0aCAtIHRpbGVXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGxheUdpZiA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGF1c2VHaWYgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRHaWZUaWxlRGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdpZlRpbGUgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZi10aWxlJykpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGlsZVdpZHRoID0gZ2lmVGlsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRpbGVIZWlnaHQgPSBnaWZUaWxlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5uZ1JlcGVhdFN0YXJ0ZWREZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfZ2V0R2lmVGlsZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJylcclxuICAgIC5kaXJlY3RpdmUoJ2dpZmFibGVGaWxlSW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWZpbGUtaW5wdXQvZ2lmYWJsZS1maWxlLWlucHV0Lmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlSGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnKVxyXG4gICAgLmRpcmVjdGl2ZSgnZ2lmYWJsZUluZGV4SGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6ICd0cnVlJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2luZGV4L2dpZmFibGUtaW5kZXgtaGVhZGVyL2dpZmFibGUtaW5kZXgtaGVhZGVyLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlUmVwZWF0RXZlbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGUuJGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5uZ1JlcGVhdFN0YXJ0ZWREZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==