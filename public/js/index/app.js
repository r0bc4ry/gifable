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

        }
    ]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('ApiController', [
        '$scope',
        function (
            $scope
        ) {

        }
    ]);

'use strict';

angular.module('gifable.index.controllers')
    .controller('IndexController', [
        '$scope',
        function (
            $scope
        ) {
            Dropzone.options.myAwesomeDropzone = {
                url: "/transcode",
                maxFilesize: 100,
                acceptedFiles: "image/gif",
                dictDefaultMessage: "Your mom"
            };
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYWJvdXQvYWJvdXQtY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXBpL2FwaS1jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmRleC9pbmRleC1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnLCBbXHJcbiAgICAvLyBBbmd1bGFyIG1vZHVsZXNcclxuICAgICduZ1JvdXRlJyxcclxuXHJcbiAgICAvLyBUaGlyZC1wYXJ0eSBtb2R1bGVzXHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gbW9kdWxlc1xyXG4gICAgJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLFxyXG4gICAgJ2dpZmFibGUuaW5kZXgudGVtcGxhdGVzJ1xyXG5dKTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LmNvbnRyb2xsZXJzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnLCBbXSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXgnKVxyXG4gICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5kZXgvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdJbmRleENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hYm91dCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2Fib3V0L2Fib3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQWJvdXRDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKCcvYXBpJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvYXBpL2FwaS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0FwaUNvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcclxuICAgIH1dKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0Fib3V0Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0FwaUNvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAkc2NvcGVcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LmNvbnRyb2xsZXJzJylcclxuICAgIC5jb250cm9sbGVyKCdJbmRleENvbnRyb2xsZXInLCBbXHJcbiAgICAgICAgJyRzY29wZScsXHJcbiAgICAgICAgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAkc2NvcGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgRHJvcHpvbmUub3B0aW9ucy5teUF3ZXNvbWVEcm9wem9uZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvdHJhbnNjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS9naWZcIixcclxuICAgICAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogXCJZb3VyIG1vbVwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==