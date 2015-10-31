"use strict";
angular.module('frontendApp.taskService', [])


.factory('Task', function($http) {
  // Might use a resource here that returns a JSON array
    var tasks = {};

    $http({
      method: 'GET',
      url: 'http://localhost:8080/readTasks'
    }).then(function successCallback(output){ 
      tasks = output.data
    });
   
    function sendPoints(total){
    $http({
      method: 'GET',
      url: 'http://localhost:8080/updatePoints?id='+ total.id + '&points='+total.points
    }).then(function successCallback(output){    });
  } 


  return {
    all: function() {
      return tasks;
    },
    get: function(id) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(id)) {
          return tasks[i];
        }
      }
     
    }
  };
});