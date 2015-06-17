'use strict';

/**
 * @ngdoc service
 * @name evidentHelpfulApp.voter
 * @description
 * # voter
 * Service in the evidentHelpfulApp.
 */
angular.module('evidentHelpfulApp')
  .service('Voter', function ($window, $firebaseArray, Ref) {

    var voteLog = $firebaseArray(Ref.child('helpful'));

    var Voter = {
      upvote: upvote,
      downvote: downvote,
      log: voteLog
    };

    function findPage(array, key, value) {
      for (var i= 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return i;
        }
      }
      return null;
    }

    function upvote () {
      var path = $window.location.hash;
      var pageIndex = findPage(voteLog, 'page', path);
      if (pageIndex !== null) {
        voteLog[pageIndex]['up'] += 1;
        voteLog.$save(pageIndex);
      } else {
        voteLog.$add({
          page: path,
          up: 1,
          down: 0
        });
      }
    }

    function downvote () {
      var path = $window.location.hash;
      var pageIndex = findPage(voteLog, 'page', path);
      if (pageIndex !== null) {
        voteLog[pageIndex]['down'] += 1;
        voteLog.$save(pageIndex);
      } else {
        voteLog.$add({
          page: path,
          up: 0,
          down: 1
        });
      }

    }

    return Voter;

  });
