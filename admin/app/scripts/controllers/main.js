'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope, Task, $window) {
   	$scope.tasks = Task.all();

   	$scope.$watch(function(){return Task.all();}, function(newVal, oldVal) {
		     if (typeof newVal !== 'undefined') {
		     $scope.tasks = newVal;
		     console.log(newVal)
		 }
      });

   $scope.reload = function(){
   		$window.location.reload();
   } 
  });
