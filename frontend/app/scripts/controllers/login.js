'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, User) {
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
    }

    $scope.signIn = function(){
    	var login = {
    		username: $scope.username,
    		password: $scope.password
    	}
    	$scope.user = User.signIn(login);
    	console.log($scope.user);
    }

    $scope.$watch(function(){return User.getVerified();}, function(newVal, oldVal) {
		if (typeof newVal !== 'undefined') {
       		
       		console.log(newVal)
       
    	}});

  });
