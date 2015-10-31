"use strict";
angular.module('admin.taskService', [])


.factory('Task', function($http) {
  // Might use a resource here that returns a JSON array
    var tasks = {};

    $http({
      method: 'GET',
      url: 'http://localhost:8080/readTasks'
    }).then(function successCallback(output){ 
      tasks = output.data
    });
   
   function createNote(note){
    $http({
      method: 'GET',
      url: 'http://localhost:8080/createTask?title='+note.title+'&description=' + note.description + '&points='+note.points+'&listid='+1
    }).then(function successCallback(output){ 
      console.log(output);
    });
   } 


  return {
    all: function() {
      return tasks;
    },
    createNote: createNote,
    get: function(id) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(id)) {
          return tasks[i];
        }
      }
     
    }
  };
});