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
  var retrievedObject = localStorage.getItem('points');
  $scope.currentPoints = JSON.parse(retrievedObject); 
  console.log($scope.taskDetail);
  $scope.completedTask = function(points){
    var retrievedUser = localStorage.getItem('user');
    var total = {
      id: retrievedUser.id,
      points: points
    }

    $scope.currentPoints += points
    localStorage.setItem('points', JSON.stringify($scope.currentPoints)); 
  }
});
