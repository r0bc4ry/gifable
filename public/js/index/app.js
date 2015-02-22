'use strict';

angular.module('gifable.index', [
    // Angular modules
    'ngRoute',

    // Third-party modules

    // Application modules
    'gifable.index.controllers',
    'gifable.index.templates'
]);

angular.module('gifable.index.controllers', []);
angular.module('gifable.index.templates', []);
'use strict';

angular.module('gifable.index')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'components/index/index.html',
            controller: 'IndexController'
        });

        $routeProvider.when('/api', {
            templateUrl: 'components/api/api.html',
            controller: 'ApiController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('ApiController', [
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

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$interval',
        '$scope',
        '$templateCache',
        '$window',
        function (
            $interval,
            $scope,
            $templateCache,
            $window
        ) {
            var loadingMessages = [
                'Test 1',
                'Test 2',
                'Test 3',
                'Test 4',
                'Test 5'
            ];

            $interval(function() {
                $scope.testCode = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
            }, 2000);

            var dropzone = new Dropzone('div#gifable-dropzone', {
                url: '/api/v1/gifs',
                maxFilesize: 100,
                uploadMultiple: false,
                maxFiles: 1,
                acceptedFiles: 'image/gif',
                previewTemplate: $templateCache.get('components/index/dropzone/preview.html'),
                dictDefaultMessage: $templateCache.get('components/index/dropzone/default-message.html')
            });

            dropzone.on('error', function(file, error) {
                $scope.error = error;
            });

            dropzone.on('success', function(file, response) {
                $window.location.href = '/' + response.data.gif.shortcode;
            });
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYXBpL2FwaS1jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmRleC9pbmRleC1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnLCBbXHJcbiAgICAvLyBBbmd1bGFyIG1vZHVsZXNcclxuICAgICduZ1JvdXRlJyxcclxuXHJcbiAgICAvLyBUaGlyZC1wYXJ0eSBtb2R1bGVzXHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gbW9kdWxlc1xyXG4gICAgJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuaW5kZXgudGVtcGxhdGVzJ1xyXG5dKTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LmNvbnRyb2xsZXJzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnLCBbXSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnKVxyXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hcGknLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9hcGkvYXBpLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXBpQ29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignQXBpQ29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBmaWxlOiBcInRlc3RcIlxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wb3N0UmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IFwiZ2RvdTJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZl9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5naWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91Mnkud2VibVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJtX2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBfdXJsOiBcImh0dHA6Ly8wMmQ0MzVhOWZkZjJjZmZhODJhZS0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5yNDQuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBzX3VybDogXCJodHRwczovLzlkZjU1OTk5N2VmNzMxYjBiMTBiLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnNzbC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5Lm1wNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMTUtMDItMTcgMDM6MDg6MDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldFJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBnaWY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiBcImdkb3UyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2NDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LmdpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cHNfdXJsOiBcImh0dHBzOi8vOWRmNTU5OTk3ZWY3MzFiMGIxMGItMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMuc3NsLmNmNS5yYWNrY2RuLmNvbS9nZG91MnkuZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cF91cmw6IFwiaHR0cDovLzAyZDQzNWE5ZmRmMmNmZmE4MmFlLTEzMmYwZjgxOTgzZTVjZWVjMzVmNzlmNjUzMmFhMjRjLnI0NC5jZjUucmFja2Nkbi5jb20vZ2RvdTJ5LndlYm1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS53ZWJtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwX3VybDogXCJodHRwOi8vMDJkNDM1YTlmZGYyY2ZmYTgyYWUtMTMyZjBmODE5ODNlNWNlZWMzNWY3OWY2NTMyYWEyNGMucjQ0LmNmNS5yYWNrY2RuLmNvbS9nZG91MnkubXA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNF9odHRwc191cmw6IFwiaHR0cHM6Ly85ZGY1NTk5OTdlZjczMWIwYjEwYi0xMzJmMGY4MTk4M2U1Y2VlYzM1Zjc5ZjY1MzJhYTI0Yy5zc2wuY2Y1LnJhY2tjZG4uY29tL2dkb3UyeS5tcDRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogXCIyMDE1LTAyLTE3IDAzOjA4OjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAxNS0wMi0xNyAwMzowODowMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBudWxsLCA0KTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJGludGVydmFsJyxcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICAnJHRlbXBsYXRlQ2FjaGUnLFxyXG4gICAgICAgICckd2luZG93JyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRpbnRlcnZhbCxcclxuICAgICAgICAgICAgJHNjb3BlLFxyXG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZSxcclxuICAgICAgICAgICAgJHdpbmRvd1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgbG9hZGluZ01lc3NhZ2VzID0gW1xyXG4gICAgICAgICAgICAgICAgJ1Rlc3QgMScsXHJcbiAgICAgICAgICAgICAgICAnVGVzdCAyJyxcclxuICAgICAgICAgICAgICAgICdUZXN0IDMnLFxyXG4gICAgICAgICAgICAgICAgJ1Rlc3QgNCcsXHJcbiAgICAgICAgICAgICAgICAnVGVzdCA1J1xyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgJGludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRlc3RDb2RlID0gbG9hZGluZ01lc3NhZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvYWRpbmdNZXNzYWdlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoJ2RpdiNnaWZhYmxlLWRyb3B6b25lJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS92MS9naWZzJyxcclxuICAgICAgICAgICAgICAgIG1heEZpbGVzaXplOiAxMDAsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlczogMSxcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS9naWYnLFxyXG4gICAgICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvaW5kZXgvZHJvcHpvbmUvcHJldmlldy5odG1sJyksXHJcbiAgICAgICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9pbmRleC9kcm9wem9uZS9kZWZhdWx0LW1lc3NhZ2UuaHRtbCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZHJvcHpvbmUub24oJ2Vycm9yJywgZnVuY3Rpb24oZmlsZSwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRyb3B6b25lLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJyArIHJlc3BvbnNlLmRhdGEuZ2lmLnNob3J0Y29kZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==