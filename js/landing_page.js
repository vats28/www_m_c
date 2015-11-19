angular.module('starter.landingPage', [])
    .controller('landingPageCtrl', function ($scope, $timeout) {
        $scope.x = {};
        $scope.x.IsloggedIn = true;
        $scope.init = function(){
            if($scope.session_variables.user_id == undefined){

                $timeout(function() {
                    //alert('timeout');
                    $scope.x.IsloggedIn = false; //close the popup after 3 seconds for some reason
                }, 500);

            }else{
                $scope.jumpTo('app.dashboard');
            }
        }




    });






