'use strict';

/**
 * @ngdoc function
 * @name evidentHelpfulApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the evidentHelpfulApp
 */
angular.module('evidentHelpfulApp')
  .controller('ProductsCtrl', function ($scope) {
    
    var vm = this;

    vm.products = [
    {
      "id": 1,
      "title": "Murder on the Orient Express",
      "author": "Agatha Christie",
      "credits": 10,
      "price": 10
    },
    {
      "id": 2,
      "title": "Dark Fire",
      "author": "C. J. Sansom",
      "credits": 15,
      "price": 15
    },
    {
      "id": 3,
      "title": "Angels & Demons",
      "author": "Dan Brown",
      "credits": 12,
      "price": 12
    }
  ];

  });
