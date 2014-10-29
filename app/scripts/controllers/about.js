'use strict';

/**
 * @ngdoc function
 * @name huntingTheSnarkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the huntingTheSnarkApp
 */
angular.module('huntingTheSnarkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
