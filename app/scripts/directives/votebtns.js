'use strict';

/**
 * @ngdoc directive
 * @name evidentHelpfulApp.directive:voteBtns
 * @description
 * # voteBtns
 */
angular.module('evidentHelpfulApp')
  .directive('voteBtns', function (Voter) {
    return {
      templateUrl: 'scripts/directives/voteBtns.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.upvote = Voter.upvote;
        scope.downvote = Voter.downvote;
        scope.log = Voter.log;
        
      }
    };
  });