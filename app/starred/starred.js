'use strict';

angular.module('appGitHubApi.starred', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/starred', {
    templateUrl: 'starred/starred.html',
    controller: 'StarredCtrl'
  });
}])

.controller('StarredCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users/diegonobre/starred').success(function(data) {
    $scope.starred = data;
  });
});