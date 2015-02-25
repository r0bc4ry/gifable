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
]).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**',
        'https://9df559997ef731b0b10b-132f0f81983e5ceec35f79f6532aa24c.ssl.cf5.rackcdn.com/**'
    ]);
});

angular.module('gifable.app.controllers', []);
angular.module('gifable.app.directives', []);
angular.module('gifable.app.templates', []);