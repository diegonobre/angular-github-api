'use strict';

angular.module('appGitHubApi.version', [
  'appGitHubApi.version.interpolate-filter',
  'appGitHubApi.version.version-directive'
])

.value('version', '0.01');
