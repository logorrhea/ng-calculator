'use strict';

angular.module('ngCalculator', [])

.controller('NgCalculatorController', ['$scope', '$attrs',
  function($scope, $attrs) {
  }
])

.controller('NgButtonControler', ['$scope', '$attrs',
    function($scope, $attrs) {
        $scope.val = $attrs.calcButton;
        $scope.colspan = $attrs.colspan ? $attrs.colspan : 1;
        $scope.rowspan = $attrs.rowspan ? $attrs.rowspan : 1;

        $scope.push = function() {
            console.log($scope.val);
        }
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
})

.directive('calcButton', function() {
    return {
        restrict: 'A',
        controller: 'NgButtonControler',
        templateUrl: 'js/template/button.html',
        transclude: true,
        replace: true,
        scope: {}
    };
});
