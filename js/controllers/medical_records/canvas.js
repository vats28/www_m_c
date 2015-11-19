angular.module('starter.canvasRec', [])

    .controller('canvasCtrl', function ($scope, $timeout, $ionicModal, $ionicPopup, utilities) {

        $scope.init = function () {
/*
            document.getElementById('simple_sketch').style.width = $(window).width() + 'px';
            document.getElementById('simple_sketch').style.height = $(window).height() + 'px';
            document.getElementById('simple_sketch').style.backgroundColor =  '#fff';*/

            $(function() {
                $('#simple_sketch').sketch();
                $('#simple_sketch').width('320px');
                $('#simple_sketch').height('480px');
            });
            alert($(window).height());
        }
    });
