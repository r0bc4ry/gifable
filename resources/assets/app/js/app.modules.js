'use strict';

angular.module('gifable.app', [
    // Angular modules
    'ngAnimate',
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
        // Set headers for requests so Laravel can detect AJAX/HTTP
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        // Set URL whitelist
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',

            // Gifable Development
            'http://02d435a9fdf2cffa82ae-132f0f81983e5ceec35f79f6532aa24c.r44.cf5.rackcdn.com/**',
            'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**',

            // Gifable
            'http://files.gifable.io/**'
        ]);
    }
]);

angular.module('gifable.app.controllers', []);
angular.module('gifable.app.directives', []);
angular.module('gifable.app.templates', []);