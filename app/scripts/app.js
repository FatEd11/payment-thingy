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
    'firebase.ref'
  ])
  .constant('FBURL', 'https://evident-helpful.firebaseio.com');
