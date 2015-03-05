'use strict';

angular.module('gifable.app', [
    // Angular modules
    'ngRoute',

    // Third-party modules
    'angularFileUpload',
    'ngDialog',

    // Application modules
    'gifable.app.controllers',
    'gifable.app.directives',
    'gifable.app.templates'
]).config([
    '$httpProvider',
    '$sceDelegateProvider',
    function(
        $httpProvider,
        $sceDelegateProvider
    ) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',

            // Gifable Development
            'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**',
            'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**',

            // Gifable
            'http://4ee2a789ee643044a25a-31e9d834e87000ce37d406d3bc90d4ae.r22.cf5.rackcdn.com/**',
            'https://f600b73e109af7849bf1-31e9d834e87000ce37d406d3bc90d4ae.ssl.cf5.rackcdn.com/**'
        ]);
    }
]);

angular.module('gifable.app.controllers', []);
angular.module('gifable.app.directives', []);
angular.module('gifable.app.templates', []);