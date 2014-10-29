'use strict';

/**
 * @ngdoc overview
 * @name huntingTheSnarkApp
 * @description
 * # huntingTheSnarkApp
 *
 * Main module of the application.
 */
angular
  .module('huntingTheSnarkApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
