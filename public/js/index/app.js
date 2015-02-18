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
            var defaultMessageTemplate = '' +
                '<img src="/img/index-upload.png">' +
                '<h3>DRAG &amp DROP</h3>';

            Dropzone.options.myAwesomeDropzone = {
                url: "/transcode",
                maxFilesize: 100,
                acceptedFiles: "image/gif",
                dictDefaultMessage: defaultMessageTemplate
            };
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYWJvdXQvYWJvdXQtY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXBpL2FwaS1jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmRleC9pbmRleC1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleCcsIFtcclxuICAgIC8vIEFuZ3VsYXIgbW9kdWxlc1xyXG4gICAgJ25nUm91dGUnLFxyXG5cclxuICAgIC8vIFRoaXJkLXBhcnR5IG1vZHVsZXNcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycsXHJcbiAgICAnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LnRlbXBsYXRlcycsIFtdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleCcpXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0Jywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBYm91dENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hcGknLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9hcGkvYXBpLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXBpQ29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignQWJvdXRDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignQXBpQ29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdE1lc3NhZ2VUZW1wbGF0ZSA9ICcnICtcclxuICAgICAgICAgICAgICAgICc8aW1nIHNyYz1cIi9pbWcvaW5kZXgtdXBsb2FkLnBuZ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxoMz5EUkFHICZhbXAgRFJPUDwvaDM+JztcclxuXHJcbiAgICAgICAgICAgIERyb3B6b25lLm9wdGlvbnMubXlBd2Vzb21lRHJvcHpvbmUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3RyYW5zY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwMCxcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvZ2lmXCIsXHJcbiAgICAgICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlVGVtcGxhdGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9