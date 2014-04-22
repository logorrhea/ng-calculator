'use strict';

angular.module('ngCalculator', [])

.controller('NgCalculatorController', ['$scope', '$attrs',
  function($scope, $attrs) {
    $scope.lol = 'rofl';
  }
])

.directive('ngCalculator', function() {
  return {
    restrict: 'A',
    controller: 'NgCalculatorController',
    templateUrl: 'js/template/calculator.html',
    transclude: true,
    replace: true
  };
});