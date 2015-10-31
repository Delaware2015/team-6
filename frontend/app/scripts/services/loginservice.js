"use strict";
angular.module('frontendApp.loginService', [])


.factory('User', function($http) {
  // Might use a resource here that returns a JSON array
  var verified;
  console.log("Test");

  function createUser(user){
    console.log("create User");
    $http({
      method: 'GET',
      url: 'http://localhost:8080/createUser?firstname='+ user.firstname + '&lastname='+user.lastname+'&gradelevel='+ user.gradelevel + '&email=' +user.email + '&username='+ user.username +'&password=' +user.password 
    }).then(function successCallback(output){    });
  }

  function signIn(login){
    $http({
      method: 'GET',
      url: 'http://localhost:8080/auth?username=' + login.username + '&password=' + login.password
    }).then(function successCallback(output){
      console.log(output.data.id);
        if(output.data.id != null){
          var user =output.data;
          verified =true;
          localStorage.setItem('user', JSON.stringify(user));
        } else{
          verified = false;
        }
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