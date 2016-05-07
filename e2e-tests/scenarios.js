'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app github api', function() {


  it('should automatically redirect to /starred when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/starred");
  });


  describe('starred', function() {

    beforeEach(function() {
      browser.get('index.html#/starred');
    });


    it('should render starred when user navigates to /starred', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Starred by/);
    });

  });


  describe('repos', function() {

    beforeEach(function() {
      browser.get('index.html#/repos');
    });


    it('should render repos when user navigates to /repos', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/repositories:/);
    });

  });
});
