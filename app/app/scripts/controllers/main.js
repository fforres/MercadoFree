'use strict';

/**
 * @ngdoc function
 * @name mercadofreeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercadofreeApp
 */
angular.module('mercadofreeApp')
  .controller('MainCtrl', function ($scope, Product, $http) {
  	
  	$scope.findAll	 = function(){
  		$scope.products = Product.find();
  	}

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.findOneProduct = function(){
  		$scope.product = Product.findOne({ id: ElIdQueVengaDeLaURL });
    }
  });
