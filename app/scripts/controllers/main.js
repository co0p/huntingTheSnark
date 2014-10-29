'use strict';

angular.module('huntingTheSnarkApp')
  .controller('MainCtrl', function ($scope, $location) {

    var KEYCODE_ENTER = 13;

    var user = {};
    user.mail = undefined;
    user.password = undefined;
    $scope.user = user;


    $scope.validate = function ($event) {
      if ($event && $event.keyCode == KEYCODE_ENTER) {
          if (user.mail == 'a' && user.password == 'a') {
            $location.path('/overview');
          }
      }
    }
  });
