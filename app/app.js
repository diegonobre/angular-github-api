'use strict';

// Declare app level module which depends on views, and components
angular.module('appGitHubApi', [
  'ngRoute',
  'appGitHubApi.starred',
  'appGitHubApi.repos',
  'appGitHubApi.version',
  'angular-loading-bar'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/starred'});
}]);
