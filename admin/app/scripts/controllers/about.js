'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('NewTaskCtrl', function ($scope, Task) {
   $scope.createNote = function(){
    	var note = {
    		title: $scope.title,
    		description: $scope.description,
    		points: $scope.points,
    		listid: 1
    	}
    	Task.createNote(note);
    }  
  });
