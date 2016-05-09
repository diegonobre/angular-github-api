'use strict';

describe('appGitHubApi.version module', function() {
  beforeEach(module('appGitHubApi.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.0.1');
    }));
  });
});
