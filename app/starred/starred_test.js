'use strict';

describe('appGitHubApi.starred module', function() {

  beforeEach(module('appGitHubApi.starred'));

  describe('starred controller', function(){
    var scope;

    it('should ....', inject(function($rootScope, $controller) {
      //spec body

      scope = $rootScope.$new();

      var starredCtrl = $controller('StarredCtrl', {$scope: scope});
      expect(starredCtrl).toBeDefined();
    }));

  });
});