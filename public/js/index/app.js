'use strict';

angular.module('gifable.index', [
    // Angular modules
    'ngRoute',

    // Third-party modules
    'angularFileUpload',

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
        '$window',
        'FileUploader',
        function (
            $scope,
            $window,
            FileUploader
        ) {
            $scope.fileUploader = new FileUploader({
                url: '/transcode',
                formData: [{
                    _token: $window._token
                }],
                filters: [{
                    name: 'imageFilter',
                    fn: function(item, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|gif|'.indexOf(type) !== -1;
                    }
                }],
                autoUpload: true
            });

            $scope.fileUploader.onSuccessItem(function(fileItem, response, status, headers) {
                console.log(response);
            });

            $scope.fileUploader.onErrorItem(function(fileItem, response, status, headers) {
                console.log(response);
            });

            angular.element($window).bind('dragenter', function() {
                console.log('Enter');
            });

            angular.element($window).bind('dragleave', function() {
                console.log('Leave');
            });
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvYWJvdXQvYWJvdXQtY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvYXBpL2FwaS1jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmRleC9pbmRleC1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4JywgW1xyXG4gICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgLy8gVGhpcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgJ2FuZ3VsYXJGaWxlVXBsb2FkJyxcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycsXHJcbiAgICAnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LnRlbXBsYXRlcycsIFtdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleCcpXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0Jywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdBYm91dENvbnRyb2xsZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hcGknLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9hcGkvYXBpLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXBpQ29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignQWJvdXRDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgJHNjb3BlXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignQXBpQ29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFtcclxuICAgICAgICAnJHNjb3BlJyxcclxuICAgICAgICAnJHdpbmRvdycsXHJcbiAgICAgICAgJ0ZpbGVVcGxvYWRlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgICAgICR3aW5kb3csXHJcbiAgICAgICAgICAgIEZpbGVVcGxvYWRlclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvdHJhbnNjb2RlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogJHdpbmRvdy5fdG9rZW5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW1hZ2VGaWx0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihpdGVtLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJ3wnICsgaXRlbS50eXBlLnNsaWNlKGl0ZW0udHlwZS5sYXN0SW5kZXhPZignLycpICsgMSkgKyAnfCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnfGdpZnwnLmluZGV4T2YodHlwZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VwbG9hZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5maWxlVXBsb2FkZXIub25TdWNjZXNzSXRlbShmdW5jdGlvbihmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5maWxlVXBsb2FkZXIub25FcnJvckl0ZW0oZnVuY3Rpb24oZmlsZUl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuYmluZCgnZHJhZ2VudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW50ZXInKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuYmluZCgnZHJhZ2xlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTGVhdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==