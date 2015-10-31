'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('TaskCtrl', function ($scope, Task) {
  		$scope.tasks = Task.all();

   	 	$scope.$watch(function(){return Task.all();}, function(newVal, oldVal) {
		if (typeof newVal !== 'undefined') {
       		$scope.tasks= newVal; 
       		console.log(newVal)
       
    	}});

   	 
  })

  .controller('TaskDetailCtrl', function($scope, $routeParams, Task) {
  $scope.taskDetail = Task.get($routeParams.id);
  console.log($scope.taskDetail);
});
