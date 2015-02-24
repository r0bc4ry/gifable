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
]);

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
        '$interval',
        '$scope',
        '$templateCache',
        '$window',

        'FileUploader',
        function (
            $interval,
            $scope,
            $templateCache,
            $window,

            FileUploader
        ) {
            $scope.uploadingMessage = 'Uploading';

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
        }
    ]);

'use strict';

angular.module('gifable.app.directives')
    .directive('gifableFileInput', function() {
        return {
            scope: {},
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
            scope: {},
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'components/index/gifable-index-header/gifable-index-header.html'
        };
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLWNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZGV4L2luZGV4LWNvbnRyb2xsZXIuanMiLCJzaGFyZWQvZ2lmYWJsZS1maWxlLWlucHV0L2dpZmFibGUtZmlsZS1pbnB1dC5qcyIsInNoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5qcyIsImNvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwJywgW1xyXG4gICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgLy8gVGhpcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgJ2FuZ3VsYXJGaWxlVXBsb2FkJyxcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnLFxyXG4gICAgJ2dpZmFibGUuYXBwLnRlbXBsYXRlcydcclxuXSk7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuY29udHJvbGxlcnMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5kaXJlY3RpdmVzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAudGVtcGxhdGVzJywgW10pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcCcpXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2FwaScsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0RvY3VtZW50YXRpb25Db250cm9sbGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiAnLycgfSk7XHJcbiAgICB9XSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignRG9jdW1lbnRhdGlvbkNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAkc2NvcGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnBvc3REYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZmlsZTogXCJ0ZXN0XCJcclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucG9zdFJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBnaWY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiBcImdkb3UyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2NDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXRSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lmOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZTogXCJnZG91MnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtcDRfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgbnVsbCwgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmFwcC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckaW50ZXJ2YWwnLFxyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckdGVtcGxhdGVDYWNoZScsXHJcbiAgICAgICAgJyR3aW5kb3cnLFxyXG5cclxuICAgICAgICAnRmlsZVVwbG9hZGVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHNjb3BlLFxyXG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZSxcclxuICAgICAgICAgICAgJHdpbmRvdyxcclxuXHJcbiAgICAgICAgICAgIEZpbGVVcGxvYWRlclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUudXBsb2FkaW5nTWVzc2FnZSA9ICdVcGxvYWRpbmcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwbG9hZGluZ01lc3NhZ2VzID0gW1xyXG4gICAgICAgICAgICAgICAgJ1JldGljdWxhdGluZyBzcGxpbmVzJyxcclxuICAgICAgICAgICAgICAgICdTdGFydGluZyBzdWJwaXhlbCBhbmFseXNpcycsXHJcbiAgICAgICAgICAgICAgICAnUXVldWluZyBlbGV2YXRvciBtdXNpYydcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICRpbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS51cGxvYWRpbmdNZXNzYWdlID0gdXBsb2FkaW5nTWVzc2FnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXBsb2FkaW5nTWVzc2FnZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL3YxL2dpZnMnLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW1hZ2VGaWx0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmaWxlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJ3wnICsgZmlsZS50eXBlLnNsaWNlKGZpbGUudHlwZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyAnfCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnfGdpZnwnLmluZGV4T2YodHlwZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VwbG9hZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzc0l0ZW06IGZ1bmN0aW9uKGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nICsgcmVzcG9uc2UuZGF0YS5naWYuc2hvcnRjb2RlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uRXJyb3JJdGVtOiBmdW5jdGlvbihmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnb25FcnJvckl0ZW0nLCBmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlRmlsZUlucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWZpbGUtaW5wdXQvZ2lmYWJsZS1maWxlLWlucHV0Lmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5hcHAuZGlyZWN0aXZlcycpXHJcbiAgICAuZGlyZWN0aXZlKCdnaWZhYmxlSGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NoYXJlZC9naWZhYmxlLWhlYWRlci9naWZhYmxlLWhlYWRlci5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuYXBwLmRpcmVjdGl2ZXMnKVxyXG4gICAgLmRpcmVjdGl2ZSgnZ2lmYWJsZUluZGV4SGVhZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICByZXN0cmljdDogJ0FFJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogJ3RydWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvZ2lmYWJsZS1pbmRleC1oZWFkZXIvZ2lmYWJsZS1pbmRleC1oZWFkZXIuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==