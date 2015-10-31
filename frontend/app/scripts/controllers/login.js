'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, User, $window) {
    localStorage.clear();
    $scope.createUser = function(){
    	var user = {
    		firstname: $scope.firstname,
    		lastname: $scope.lastname,
    		gradelevel: $scope.gradelevel,
    		email: $scope.email,
    		username: $scope.username,
    		password: $scope.password
    	}
    	User.createUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        $window.location.href = '/#/';
    }

    $scope.signIn = function(){
    	var login = {
    		username: $scope.username,
    		password: $scope.password
    	}
    	$scope.user = User.signIn(login);
        $window.location.href = "/#/dashboard"
    	console.log($scope.user);
    }

    $scope.$watch(function(){return User.getVerified();}, function(newVal, oldVal) {
		if (newVal == true) {
       	    console.log("Access Granted");
    	}});

  });
