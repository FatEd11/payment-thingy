'use strict';

/**
 * @ngdoc directive
 * @name evidentHelpfulApp.directive:paymentBtn
 * @description
 * # paymentBtn
 */
angular.module('evidentHelpfulApp')
  .directive('paymentBtn', function (stripe, $log, $modal) {
    return {
      templateUrl: 'scripts/directives/paymentbtn.html',
      restrict: 'EA',
      scope: {
        prodt: '='
      },
      link: function (scope, element, attrs) {
        var product = scope.prodt;

        angular.element('.show-modal').on('click', function () {
          $log.log('clicked');
          renderModal();
        });

        function renderModal () {
          $modal.open({
            templateUrl: 'scripts/directives/paymentModal.html',
            controller: 'ModalContrl as mod',
            resolve: {
              product: function () {
                return scope.prodt;
              }
            }
          });
        } 

      }
    };
  });
