angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicNavBarDelegate) {
  $scope.$on("$ionicView.loaded", function( scopes, states ) {
    $ionicNavBarDelegate.showBar(false);
  });
})

.controller('GamesCtrl', function($scope, $stateParams, $timeout, $state, $ionicNavBarDelegate) {

  $scope.$on("$ionicView.loaded", function( scopes, states ) {
    $ionicNavBarDelegate.showBar(true);
  });

  $scope.tickets = [];

  $scope.barcode = {
    number: null,
    done: false
  };

  $scope.clear = function clear() {
    $scope.tickets = [];
    $scope.barcode.number = null;
    $scope.barcode.done = false;
  }

  $scope.generate = function generate() {
    if ($scope.barcode.number.length == 14 && $scope.barcode.number != null) {
      var obj = $scope.barcode;
      var number = parseInt(obj.number);
      $scope.tickets.push(obj);
      for (var i = 0; i < 9; ++i) {
        number += 1;
        var newObj = {
          number: number
        };
        $scope.tickets.push(newObj);
      }
      $scope.barcode.done = true;
    }
  }
})

.controller('TicketCtrl', function($scope, $stateParams) {
  $scope.getBarcode = function getBarcode() {
    JsBarcode("#barcode", $stateParams.barcode, {
      format: "ITF",
      width:4,
      height:40,
      displayValue: false
    });
  }
  $scope.getBarcode();

  $scope.getBarcodeNumber = function getBarcodeNumber() {
    return $stateParams.barcode;
  }
});
