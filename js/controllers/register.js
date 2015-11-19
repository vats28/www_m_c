angular.module('starter.register', [])

.controller('registerCtrl', function($scope) {

      $scope.init= function(){
        //$scope.disableSideMenuDrag();
          alert('registerCtrl');
      }

      /*$scope.onSaveClick_header = function(){
        $scope.enableSideMenuDrag();
        $scope.jumpTo('app.medical_records');
      }*/
});
