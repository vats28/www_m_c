angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $state,$ionicLoading, $ionicPopup, $ionicModal, generic_http_post_service,
                                     $ionicHistory, $ionicSideMenuDelegate, $ionicActionSheet, $timeout) {


        $scope.app_data = {};
        $scope.app_data.title = "mCURA";
        $scope.app_data.save_button = {};
        $scope.app_data.navicon = {};
        $scope.app_data.save_button.visible = false;
        $scope.app_data.navicon.visible = true;
        $scope.session_variables = {};
        $scope.reg = {};

        //global scope variables region start here
        $scope.OS = {
            ANDROID: true,
            IOS: false
        };

        $scope.app_version = {
            ANDROID: '3.0',
            IOS: '3.0'
        };
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
            var stateId = $ionicHistory.currentView().stateId;
            if (stateId == "app.add_loved_ones") {
                $scope.app_data.save_button.visible = true;
                $scope.app_data.navicon.visible = true;
            } else if (stateId == "app.register") {
                $scope.app_data.save_button.visible = true;
                $scope.app_data.navicon.visible = false;
            }
            else {
                $scope.app_data.save_button.visible = false;
                $scope.app_data.navicon.visible = true;
            }
        });

        // this is a menu item click
        $scope.onSaveClick = function () {
            var stateId = $ionicHistory.currentView().stateId;
            if (stateId == "app.register") {
                $scope.enableSideMenuDrag();
                $scope.disableBack();
                $scope.jumpTo('app.medical_records');
            }
        }

        //end menuitem clicks


        $scope.menu = {};


        $scope.menu.list = [
            /*{
             id: 1,
             name: "Emergency Contact",
             icon: "ion-ios-telephone",
             target: "app.list_loved_ones"
             },
             {
             id: 2,
             name: "Vital/ clinical Parameters",
             icon: "ion-stats-bars"
             },*/
            {
                id: 3,
                name: "Medical records",
                icon: "ion-clipboard",
                target: "app.medical_records"
            },
            {
                id: 4,
                name: "Insurance",
                icon: "ion-umbrella"
            },
            {
                id: 5,
                name: "Medical bills",
                icon: "ion-ios-list"
            },
            {
                id: 6,
                name: "Identity library",
                icon: "ion-ios-book"
            },
            {
                id: 7,
                name: "My Health Accounts",
                icon: "ion-person"
            },
            {
                id: 8,
                name: "My Health Pics",
                icon: "ion-image"
            },
            {
                id: 9,
                name: "My Social habits",
                icon: "ion-paper-airplane"
            },
            {
                id: 10,
                name: "My health providers",
                icon: "ion-ios-medkit"
            },
            {
                id: 11,
                name: "Register",
                icon: "ion-ios-medkit",
                target: "app.register"
            },
            {
                id: 12,
                name: "Dashboard",
                icon: "ion-home",
                target: "app.dashboard"
            }

        ];

        $scope.jumpTo = function (pageName) {
            //alert(pageName);
            $state.go(pageName);
        }//end


        $scope.goBackScreen = function () {
            $ionicHistory.goBack();

        }// end

        $scope.clearCache = function () {

            $ionicHistory.clearCache();

        }//end

        $scope.clearCacheAndHistory = function () {
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();

        }//end

        $scope.clearHistory = function () {
            $ionicHistory.clearHistory();

        }//end

        $scope.disableBack = function () {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            /* $ionicViewService.nextViewOptions({

             });*/
        }// end

        $scope.enableBack = function () {

            $ionicHistory.nextViewOptions({
                disableBack: false
            });
            /* $ionicViewService.nextViewOptions({

             });*/
        }// end

        $scope.enableSideMenuDrag = function () {
            $ionicSideMenuDelegate.canDragContent(true);
        }

        $scope.disableSideMenuDrag = function () {
            $ionicSideMenuDelegate.canDragContent(false);
        }


        $scope.showAlertWindow = function (text) {
            $ionicPopup.alert({
                title: text,
                //cancelType: 'color_grey',// String (default: 'button-default'). The type of the Cancel button.
                okType: 'color_green'// String (default: 'OK'). The text of the OK button.
            }).then(function (res) {
                console.log('Your log ', res);
            });
        }

        $scope.showAlertWindow_Titled = function (title, template, callback, oktext) {


            $ionicPopup.alert({
                title: title != null? title : 'Sorry',
                template: '<div align="center">' + template + '</div>',
                okText: oktext != null ? oktext : 'OK',
                okType: 'color_green'
            }).then(function (res) {
                if (callback != null && callback != undefined) {
                    callback();
                }
                //this.close();
            });
        }//end

        $scope.showLoader = function (msg) {
            $ionicLoading.show({
                template: '<ion-spinner icon="lines" class="spinner-energized" style="float: left;"></ion-spinner>' + '<span style="margin-left: 5px;">' + msg + '</span>'//'<span class="icon spin ion-loading-d"></span> ' + msg

            });
        };
        $scope.hideLoader = function () {
            $ionicLoading.hide();
        };


        $scope.showToast = function (msg) {

            $ionicLoading.show({
                template: msg,
                delay: 500,
                duration: 2000

            });
        };


        $scope.showLoginBox = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<form >' +

                '<label class="item item-input" >' +
                '<input type="text"  data-ng-model="session_variables.username"  placeholder="user name">' +
                '</label>' +
                '<label class="item item-input">' +
                '<input type="text" data-ng-model="session_variables.password"  placeholder="password">' +
                '</label>' +
                '</form>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Login',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.session_variables.username || !$scope.session_variables.password) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return true;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.session_variables.username = undefined;
                            $scope.session_variables.password = undefined;
                            return false;
                        }
                    },
                ]
            }).then(function (res) {
                if (res) {
                    /*$scope.session_variables.user_id = 1;
                    $scope.clearHistory();
                    $scope.jumpTo('app.dashboard');*/
                    $scope.doLogin();
                }
            });
        }//end method



        $scope.doLogin = function () {
            $scope.showLoader("Logging in...");
            $scope.requestData = {};
           // http://test.tn.mcura.com/health_dev.svc/Json/GetLoginPublic?UseraName={USERANAME}&PWD={PWD}
            $scope.requestData.UseraName =  $scope.session_variables.username;
            $scope.requestData.PWD =  $scope.session_variables.password;
            generic_http_post_service.getDetails_httpget(generic_http_post_service.getServices().LOGIN, $scope.requestData, $scope.doLogin_callback);
        };//end doLogin

        $scope.doLogin_callback = function(data){
            $scope.hideLoader();
            if(data.message.status != false) {
                //alert(JSON.stringify(data));
                $scope.session_variables.user_id = 1;
                $scope.clearHistory();
                $scope.jumpTo('app.dashboard');
            }else{
                $scope.showAlertWindow_Titled(null,data.message.msg, null, null);
            }
        }

        $ionicModal.fromTemplateUrl('templates/register.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.register_modal = modal;
        });
        $scope.openRegisterModal = function () {
            $scope.register_modal.show();
        };
        $scope.closeRegisterModal = function () {
            $scope.register_modal.hide();
        };

        $scope.showGenericImageUploadSheet = function( callback) {
            //alert('sdbhc');
            // Show the action sheet
            var popup_buttons = [];
            if ($scope.OS.ANDROID) {
                popup_buttons = [
                    {text: 'Choose Existing'},
                    {text: 'Take Photo'},
                    {text: 'Cancel'},
                ]
            } else {
                popup_buttons = [
                    {text: 'Choose Existing'},
                    {text: 'Take Photo'},
                ]
            }

            var uploadPopupModal = $ionicActionSheet.show({


                buttons: popup_buttons,

                titleText: '<div align="center">' + '<b class="font_color_head">Upload</b><br/>To upload an image, select one of the following' + '</div>',
                cancelText: '<span class="font_color_head">Cancel</span> ',
                cancel: function () {
                    // add cancel code..
                    callback(0);
                },
                buttonClicked: function (index) {
                    if (index == 0) {
                        callback(2);
                    } else if (index == 1) {
                        callback(1);
                    } else if (index == 2) {
                        callback(0)
                    }
                    uploadPopupModal();
                    //return true;
                }
            });
        }

        /*//Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.register_modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('register_modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('register_modal.removed', function () {
            // Execute action
        });*/
});
