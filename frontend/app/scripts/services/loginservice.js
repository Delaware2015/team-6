"use strict";
angular.module('frontendApp.loginService', [])


.factory('User', function($http) {
  // Might use a resource here that returns a JSON array

  console.log("Test");

  function createUser(user){
    $http({
      method: 'GET',
      url: 'http://localhost:8080/createUser?firstname='+ user.firstname + '&lastname='+user.lastname+'&gradelevel='+ user.gradelevel + '&email=' +user.email + ' &password=' +user.password 
    }).then(function successCallback(output){
        console.log(output);
    });
  }


  return {
    all: function() {
      return null;
    },
    createUser: createUser
  };
});