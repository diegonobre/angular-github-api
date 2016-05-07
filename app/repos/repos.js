'use strict';

angular.module('appGitHubApi.repos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/repos', {
    templateUrl: 'repos/repos.html',
    controller: 'ReposCtrl'
  });
}])

.controller('ReposCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users/diegonobre/repos').success(function(data) {
    $scope.repos = data;
  });
});