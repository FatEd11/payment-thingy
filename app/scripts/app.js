'use strict';

/**
 * @ngdoc overview
 * @name evidentHelpfulApp
 * @description
 * # evidentHelpfulApp
 *
 * Main module of the application.
 */
angular.module('evidentHelpfulApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'angular-stripe',
    'ui.bootstrap'
  ])
  .constant('FBURL', 'https://evident-helpful.firebaseio.com')
  .config(function( stripeProvider) {
    stripeProvider.setPublishableKey('pk_test_grveAd7yzaiuoYU4XDeCdd48');
  });
