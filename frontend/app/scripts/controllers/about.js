'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AboutCtrl', function ($scope, Task) {
    var object = localStorage.getItem('user');
    $scope.user =JSON.parse(object);
    console.log($scope.user);

    $scope.tasks = Task.all();

    var points = 25;
    localStorage.setItem('points', JSON.stringify(points));

	$scope.$watch(function(){return Task.all();}, function(newVal, oldVal) {
	if (typeof newVal !== 'undefined') {
   		$scope.tasks= newVal; 
   		console.log(newVal)
   
	}}); 
  });
