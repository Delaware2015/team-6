'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.createUser = function(){
    	var user = {
    		firstname: $scope.firstname,
    		lastname: $scope.lastname,
    		gradelevel: $scope.gradelevel
    	}
    	console.log(user);
    }
  });
