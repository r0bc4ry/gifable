'use strict';

angular.module('gifable.gif', [
    // Angular modules

    // Third-party modules
    'ngDialog',

    // Application modules
    'gifable.gif.controllers',
    'gifable.gif.templates'
]).config([
    '$httpProvider',
    '$interpolateProvider',
    function(
        $httpProvider,
        $interpolateProvider
    ) {
        // Set headers for requests so Laravel can detect AJAX/HTTP
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        // Prevent Blade from conflicting with Angular
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }
]);

angular.module('gifable.gif.controllers', []);
angular.module('gifable.gif.templates', []);
