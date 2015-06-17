'use strict';

describe('Directive: voteBtns', function () {

  // load the directive's module
  beforeEach(module('evidentHelpfulApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vote-btns></vote-btns>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the voteBtns directive');
  }));
});
