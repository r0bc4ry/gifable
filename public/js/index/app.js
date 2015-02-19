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

        $routeProvider.when('/about', {
            templateUrl: 'components/about/about.html',
            controller: 'AboutController'
        });

        $routeProvider.when('/api', {
            templateUrl: 'components/api/api.html',
            controller: 'ApiController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('AboutController', [
        '$scope',
        function (
            $scope
        ) {
            // TODO your mom
        }
    ]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('ApiController', [
        '$scope',
        function (
            $scope
        ) {
            $scope.transcodePost = JSON.stringify({
                file: "test",
                url: "test"
            }, null, 4);

            $scope.transcodeResponse = JSON.stringify({
                success: true,
                data: {
                    gif: {
                        shortcode: "test",
                        width: "test",
                        height: "test",
                        gif_http_url: "test",
                        gif_https_url: "test",
                        webm_http_url: "test",
                        webm_https_url: "test",
                        mp4_http_url: "test",
                        mp4_https_url: "test"
                    }
                }
            }, null, 4);
        }
    ]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$scope',
        function (
            $scope
        ) {
            var defaultMessageTemplate = '' +
                '<img src="/img/index-upload.png">' +
                '<h3>DRAG &amp DROP</h3>';

            var dropzone = new Dropzone('div#gifable-dropzone', {
                url: '/transcode',
                maxFilesize: 100,
                thumbnailWidth: 150,
                acceptedFiles: 'image/gif',
                dictDefaultMessage: defaultMessageTemplate,
                dictInvalidFileType: 'No',
                dictFileTooBig: '',
                dictResponseError: ''
            });
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYWJvdXQvYWJvdXQtY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXBpL2FwaS1jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmRleC9pbmRleC1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnLCBbXHJcbiAgICAvLyBBbmd1bGFyIG1vZHVsZXNcclxuICAgICduZ1JvdXRlJyxcclxuXHJcbiAgICAvLyBUaGlyZC1wYXJ0eSBtb2R1bGVzXHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gbW9kdWxlc1xyXG4gICAgJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuaW5kZXgudGVtcGxhdGVzJ1xyXG5dKTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LmNvbnRyb2xsZXJzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnLCBbXSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnKVxyXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hYm91dCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2Fib3V0L2Fib3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWJvdXRDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvYXBpJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvYXBpL2FwaS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwaUNvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcclxuICAgIH1dKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Fib3V0Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBUT0RPIHlvdXIgbW9tXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LmNvbnRyb2xsZXJzJylcclxuICAgIC5jb250cm9sbGVyKCdBcGlDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50cmFuc2NvZGVQb3N0ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZmlsZTogXCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwidGVzdFwiXHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnRyYW5zY29kZVJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBnaWY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiBcInRlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwidGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwidGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cF91cmw6IFwidGVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZfaHR0cHNfdXJsOiBcInRlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VibV9odHRwX3VybDogXCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYm1faHR0cHNfdXJsOiBcInRlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBfdXJsOiBcInRlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXA0X2h0dHBzX3VybDogXCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIG51bGwsIDQpO1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0TWVzc2FnZVRlbXBsYXRlID0gJycgK1xyXG4gICAgICAgICAgICAgICAgJzxpbWcgc3JjPVwiL2ltZy9pbmRleC11cGxvYWQucG5nXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGgzPkRSQUcgJmFtcCBEUk9QPC9oMz4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRyb3B6b25lID0gbmV3IERyb3B6b25lKCdkaXYjZ2lmYWJsZS1kcm9wem9uZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy90cmFuc2NvZGUnLFxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwMCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbFdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvZ2lmJyxcclxuICAgICAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIGRpY3RJbnZhbGlkRmlsZVR5cGU6ICdObycsXHJcbiAgICAgICAgICAgICAgICBkaWN0RmlsZVRvb0JpZzogJycsXHJcbiAgICAgICAgICAgICAgICBkaWN0UmVzcG9uc2VFcnJvcjogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==