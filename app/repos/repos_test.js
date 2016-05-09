'use strict';

describe('appGitHubApi.repos module', function() {

  beforeEach(module('appGitHubApi.repos'));

  describe('repos controller', function(){
    var scope;

    it('should ....', inject(function($rootScope, $controller) {
      //spec body

      scope = $rootScope.$new();

      var reposCtrl = $controller('ReposCtrl', {$scope: scope});
      expect(reposCtrl).toBeDefined();
    }));

  });
});