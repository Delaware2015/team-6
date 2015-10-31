'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'frontendApp.loginService',
    'frontendApp.taskService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TaskCtrl',
        controllerAs: 'task'
      })
      .when('/tasks/:id', {
        templateUrl: 'views/task-detail.html',
        controller: 'TaskDetailCtrl',
        controllerAs: 'task'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
