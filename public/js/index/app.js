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

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

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
        }
    ]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGVzLmpzIiwiYXBwLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5kZXgvaW5kZXgtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4JywgW1xyXG4gICAgLy8gQW5ndWxhciBtb2R1bGVzXHJcbiAgICAnbmdSb3V0ZScsXHJcblxyXG4gICAgLy8gVGhpcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgJ2FuZ3VsYXJGaWxlVXBsb2FkJyxcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBtb2R1bGVzXHJcbiAgICAnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycsXHJcbiAgICAnZ2lmYWJsZS5pbmRleC50ZW1wbGF0ZXMnXHJcbl0pO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dpZmFibGUuaW5kZXguY29udHJvbGxlcnMnLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdnaWZhYmxlLmluZGV4LnRlbXBsYXRlcycsIFtdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleCcpXHJcbiAgICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbmRleC9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0luZGV4Q29udHJvbGxlcidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy8nIH0pO1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ2lmYWJsZS5pbmRleC5jb250cm9sbGVycycpXHJcbiAgICAuY29udHJvbGxlcignSW5kZXhDb250cm9sbGVyJywgW1xyXG4gICAgICAgICckc2NvcGUnLFxyXG4gICAgICAgICckd2luZG93JyxcclxuICAgICAgICAnRmlsZVVwbG9hZGVyJyxcclxuICAgICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICRzY29wZSxcclxuICAgICAgICAgICAgJHdpbmRvdyxcclxuICAgICAgICAgICAgRmlsZVVwbG9hZGVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5maWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy90cmFuc2NvZGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiAkd2luZG93Ll90b2tlblxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbWFnZUZpbHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGl0ZW0sIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSAnfCcgKyBpdGVtLnR5cGUuc2xpY2UoaXRlbS50eXBlLmxhc3RJbmRleE9mKCcvJykgKyAxKSArICd8JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd8Z2lmfCcuaW5kZXhPZih0eXBlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBhdXRvVXBsb2FkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZpbGVVcGxvYWRlci5vblN1Y2Nlc3NJdGVtKGZ1bmN0aW9uKGZpbGVJdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZpbGVVcGxvYWRlci5vbkVycm9ySXRlbShmdW5jdGlvbihmaWxlSXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9