angular.module('starter.mediRec', [])

    .controller('mediRecCtrl', function ($scope, $timeout, $ionicModal, $ionicPopup, utilities) {


        $scope.recNatureIcons = Object.freeze({
            LAB: 'ion-ios-flask-outline',
            NOTE: 'ion-ios-paper-outline',
            IMAGE: 'ion-ios-photos-outline',
        });


        $scope.array_list = {

            med_rec_can_add: 1,
            allergy_can_add: 1,
            history_can_add: 0,
            health_condition_can_add: 1,
            emergency_contacts_can_add: 1,
            medication_can_add: 1,

            med_rec: [{
                doctor: "Dr. Kunal",
                date: "11 sep 2015",
                rec_nature: 1,
                url: "Dr. Kunal",
            },
                {
                    doctor: "Dr. Sunil",
                    date: "14 sep 2015",
                    rec_nature: 2,
                    url: "Dr. Kunal",
                },
                {
                    doctor: "Dr. Kunal",
                    date: "16 sep 2015",
                    rec_nature: 3,
                    url: "Dr. Kunal",
                },
                {
                    doctor: "Dr. Kunal",
                    date: "15 sep 2015",
                    rec_nature: 1,
                    url: "Dr. Kunal",
                }],

            allergy: [
                {
                    name: "Milk",
                    type: "Food Allergy",
                    from: "01 Aug 2010"
                },
                {
                    name: "Egg",
                    type: "Food Allergy",
                    from: "17 july 2012"
                },
                {
                    name: "Soya",
                    type: "Food Allergy",
                    from: "25 july 2013"
                },
                {
                    name: "Chicken",
                    type: "Food Allergy",
                    from: "24 july 2017"
                },
            ],

            history: [
                {
                    text: "Food Allergy start form this date, and still exist.",
                    date: "01 Aug 2010"
                },
                {
                    text: "Food Allergy start form this date, and still exist.",
                    date: "01 Aug 2010"
                },
            ],

            health_condition: [
                {
                    name: "Cerebral Plasy",
                    type: "Category 2",
                    from: "01 Aug 2010"
                },
                {
                    name: "Diabetes Mellitus",
                    type: "Category 2",
                    from: "14 Aug 2010"
                }
            ],

            emergency_contacts: [
                {
                    name: "Sam",
                    relation: "Brother",
                    cont1: "9887756534",
                    cont2: "9887756534",
                },
                {
                    name: "Vikram",
                    relation: "Friend",
                    cont1: "9887756534",
                    cont2: "9887756534",
                },
                {
                    name: "Suresh Bhardwaj",
                    relation: "Brother",
                    cont1: "9887756534",
                    cont2: "9887756534",
                },
            ],
            medication: []


        };


        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function (group) {
            group.show = !group.show;
        };
        $scope.isGroupShown = function (group) {
            return group.show;
        };


        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/medical_records/popovers/add_medical_records.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Open the login modal
        $scope.showAddMedRecModel = function () {
            $scope.modal.show();
        };

        // Triggered in the login modal to close it
        $scope.closeAddMedRecModel = function () {
            $scope.modal.hide();
        };


        // Perform the login action when the user submits the login form
        $scope.onAddRecSelect = function (index) {

            $timeout(function () {
                $scope.closeAddMedRecModel();
            }, 1000);
        };


        $scope.session_variables.array_rec_nature = [
            {
                id: 1,
                name: "pulse"
            },
            {
                id: 2,
                name: "SPO"
            },
            {
                id: 3,
                name: "BP"
            },
        ];

        $scope.showUploadOption = function(){
            $scope.showGenericImageUploadSheet();
        }

        $scope.session_variables.my_rec_nature = "";
        $scope.showAddMedRecPopup = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<div class="item">' +
                '<select ng-model="session_variables.my_rec_nature"  >' +
                '<option value="">-- select record nature --</option>' +
                '<option ng-repeat="item in session_variables.array_rec_nature" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '<div class="card list" >' +

                '<div class="item tabs tabs-secondary  stable-bg tabs-icon-top">' +
                '<a class="tab-item" ng-click="showUploadOption()" >' +
                '<i class="icon ion-ios-camera"></i> Capture Image' +

                '</a>' +
                '<a class="tab-item" >' +
                '<i class="icon ion-ios-videocam" ng-click="openVideo()"></i> Capture Video' +

                '</a>' +
                '</div>' +
                '</div>' +

                '<div class="card list" >' +

                '<div class="item tabs tabs-secondary  stable-bg tabs-icon-top">' +
                '<a class="tab-item"  >' +
                '<i class="icon ion-music-note" ng-click="recordAudio()"></i> Record Audio' +

                '</a>' +
                '<a class="tab-item" >' +
                '<i class="icon ion-ios-upload" ng-click="uploadFile()"></i>Upload File' +

                '</a>' +
                '</div>' +
                '</div>' +

                '<div class="card list" >' +

                '<div class="item tabs tabs-secondary  stable-bg tabs-icon-top">' +
                '<a class="tab-item"  >' +
                '<i class="icon ion-android-textsms" ng-click="writeText()"></i>Text Written' +

                '</a>' +
                '<a class="tab-item" >' +
                '<i class="icon ion-bag" ng-click="uploadData()"></i>Data' +

                '</a>' +
                '</div>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Medical Record',
                scope: $scope,
                buttons: [
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method


        $scope.medRec_temp = {};
        $scope.medRec_temp.myvitals = {};
        $scope.validationClass = Object.freeze({
            ERROR: 'ion-asterisk assertive',
            OK: 'ion-checkmark balanced'/*'ion-thumbsdown energized'*/
        });
        $scope.showAddVitalPopup = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<div class="item">' +
                '<select ng-model="medRec_temp.myvitals.id" style="width: 100%"  >' +
                '<option value="">-- select vital type --</option>' +
                '<option ng-repeat="item in session_variables.array_rec_nature" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '<div class="card list" >' +
                '<form >' +

                '<label class="item item-input" >' +
                '<input type="text"  data-ng-model="medRec_temp.myvitals.reading"  placeholder="Reading">' +
                '<i class="{{ validationClass.ERROR }}" ng-if ="!medRec_temp.myvitals.reading"></i>' +
                '</label>' +
                '<label class="item item-input">' +
                '<input type="text" data-ng-model="medRec_temp.myvitals.other_info"  placeholder="Other Info">' +
                '</label>' +
                '<label class="item item-input">' +
                '<input type="text" data-ng-model="medRec_temp.myvitals.remarks"  placeholder="Remarks">' +
                '</label>' +
                '</form>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Vitals',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.medRec_temp.myvitals.reading) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return $scope.medRec_temp.myvitals;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.medRec_temp.myvitals = {};
                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method
        $scope.openCamera = function () {
            alert('camera');
        }


        $scope.medRec_temp.mycontacts = {};
        $scope.showEmerContPopup = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<div class="item">' +
                '<select ng-model="medRec_temp.mycontacts.relation_id" style="width: 100%"  >' +
                '<option value="">-- select relation --</option>' +
                '<option ng-repeat="item in session_variables.array_relations" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '<div class="card list" >' +
                '<form >' +

                '<label class="item item-input" >' +
                '<input type="text"  data-ng-model="medRec_temp.mycontacts.name"  placeholder="Name">' +
                '<i class="{{ validationClass.ERROR }}" ng-if ="!medRec_temp.mycontacts.name"></i>' +
                '</label>' +
                '<label class="item item-input">' +
                '<input type="text" data-ng-model="medRec_temp.mycontacts.contact"  placeholder="Contact">' +
                '<i class="{{ validationClass.ERROR }}" ng-if ="!medRec_temp.mycontacts.contact"></i>' +
                '</label>' +
                '<label class="item item-input">' +
                '<input type="text" data-ng-model="medRec_temp.mycontacts.additional"  placeholder="Additional Contact">' +
                '<i class="{{ validationClass.ERROR }}" ng-if ="!medRec_temp.mycontacts.additional"></i>' +
                '</label>' +
                '</form>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Emergency Contact',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.medRec_temp.mycontacts.name || !$scope.medRec_temp.mycontacts.contact
                                || !$scope.medRec_temp.mycontacts.additional) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return $scope.medRec_temp.mycontacts;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.medRec_temp.mycontacts = {};
                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method


        $scope.medRec_temp.myallergy = {};
        $scope.showAddAllergy = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<div class="item">' +
                '<select ng-model="medRec_temp.myallergy.allergy_id" style="width: 100%"  >' +
                '<option value="">-- select allery --</option>' +
                '<option ng-repeat="item in medRec_temp.myallergy.array_allergy" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +

                '<br/><br/>' +

                '<select ng-model="medRec_temp.myallergy.allergyType_id" style="width: 100%"  >' +
                '<option value="">-- select type --</option>' +
                '<option ng-repeat="item in medRec_temp.myallergy.array_allergyType" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +
                '</div>' +


                '<div class="list" >' +
                '<label class="item item-input item-icon-right">' +
                '<i class="ion icon icon-right ion-calendar"></i>' +
                '<input type="date"  placeholder="Exist From" data-ng-model="medRec_temp.myallergy.exist_from"  >' +
                '</label>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Allergy',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.medRec_temp.myallergy.allergy_id || !$scope.medRec_temp.myallergy.allergyType_id
                                || !$scope.medRec_temp.myallergy.exist_from) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return $scope.medRec_temp.myallergy;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.medRec_temp.myallergy = {};
                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method

        $scope.medRec_temp.myHealthCondition = {};
        $scope.showAddHealthCondition = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<div class="item">' +
                '<select ng-model="medRec_temp.myHealthCondition.id" style="width: 100%"  >' +
                '<option value="">-- select category --</option>' +
                '<option ng-repeat="item in medRec_temp.myHealthCondition.array_hc" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +

                '<br/><br/>' +

                '<select ng-model="medRec_temp.myHealthCondition.type_id" style="width: 100%"  >' +
                '<option value="">-- select type --</option>' +
                '<option ng-repeat="item in medRec_temp.myHealthCondition.array_hc_type" value="{{item.id}}">' +
                '{{item.name}}' +
                '</option>' +
                '</select>' +
                '</div>' +


                '<div class="list" >' +
                '<label class="item item-input item-icon-right">' +
                '<i class="ion icon icon-right ion-calendar"></i>' +
                '<input type="date"  placeholder="Exist From" data-ng-model="medRec_temp.myHealthCondition.exist_from"  >' +
                '</label>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Heath Condition',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.medRec_temp.myHealthCondition.id || !$scope.medRec_temp.myHealthCondition.type_id
                                || !$scope.medRec_temp.myHealthCondition.exist_from) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return $scope.medRec_temp.myallergy;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.medRec_temp.myallergy = {};
                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method


        $scope.medRec_temp.myhistory = {};
        $scope.showHistoryPopup = function () {


            $ionicPopup.show({
                template: '<div class="card list" >' +
                '<label class="item item-input item-icon-right">' +
                '<i class="ion icon icon-right ion-calendar"></i>' +
                '<input type="date"  placeholder="pick a date" data-ng-model="medRec_temp.myhistory.date"  >' +
                '</label>' +
                '</div>' +
                '<div class="card list" >' +
                '<form >' +

                '<label class="item item-input item-icon-right" >' +
                '<input type="text"  data-ng-model="medRec_temp.myhistory.history"  placeholder="Name">' +
                '<i class="icon icon-right {{ validationClass.ERROR }}" ng-if ="!medRec_temp.myhistory.history"></i>' +
                '</label>' +
                '</form>' +
                '</div>',
                /*   templateUrl: 'templates/medical_records/popovers/add_medical_records.html',*/
                title: 'Add Medical Past History',
                scope: $scope,
                buttons: [

                    {
                        text: 'Save',
                        type: 'color_green',
                        onTap: function (e) {

                            if (!$scope.medRec_temp.myhistory.history || !$scope.medRec_temp.myhistory.date) {
                                //don't allow the user to close unless he enters all fields
                                //$scope.validateTextBoxes();
                                e.preventDefault();
                            } else {
                                return $scope.medRec_temp.myhistory;
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        type: 'color_grey',
                        onTap: function (e) {

                            $scope.medRec_temp.myhistory = {};
                            return false;
                        }
                    },
                ]
            }).then(function (res) {


            });
        }//end method

    });
