'use strict';

describe('Directive: paymentBtn', function () {

  // load the directive's module
  beforeEach(module('evidentHelpfulApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<payment-btn></payment-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the paymentBtn directive');
  }));
});
