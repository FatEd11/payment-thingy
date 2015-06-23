'use strict';
/**
 * @ngdoc function
 * @name evidentHelpfulApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('evidentHelpfulApp')
  .controller('ModalContrl', function (stripe, $log, product) {
    var vm = this;
    vm.product = product;
    vm.charge = charge;

    function charge () {
      stripe.card.createToken(vm.card)
      .then (function(token){
        $log.log(token);
      });
    }

  });