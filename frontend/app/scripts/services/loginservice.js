"use strict";
angular.module('frontendApp.loginService', [])


.factory('User', function($http) {
  // Might use a resource here that returns a JSON array
  var verified = false;
  console.log("Test");

  function createUser(user){
    console.log("create User");
    $http({
      method: 'GET',
      url: 'http://localhost:8080/createUser?firstname='+ user.firstname + '&lastname='+user.lastname+'&gradelevel='+ user.gradelevel + '&email=' +user.email + ' &password=' +user.password 
    }).then(function successCallback(output){    });
  }

  function signIn(login){
    $http({
      method: 'GET',
      url: 'http://localhost:8080/auth?username=' + login.username + '&password=' + login.password
    }).then(function successCallback(output){
        if(output.id!=null){
          verified =true;
        }
          verified = false;
    })
  }


  return {
    all: function() {
      return null;
    },
    getVerified: function(){
      return verified;
    },
    createUser: createUser,
    signIn: signIn
  };
});