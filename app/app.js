'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngMessages',
    'ngSanitize',
    'ngMaterial',
    'ui.router',
    'ngDragDrop',
    'ui.calendar',
    'ui.bootstrap',
    'myApp.scheduler',
    'myApp.version'
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view1/view1.html'
        })
        .state('scheduler', {
            url: '/scheduler',
            templateUrl: 'view3/view3.html',
            controller: 'CalendarCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'view2/view2.html'
        });
}]);
