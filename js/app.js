// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.landingPage',
        'starter.calendarEvents', 'starter.canvasRec', 'starter.favPres',
        'starter.dashboard', 'starter.register', 'starter.addLoved', 'services.common.utilities','services.common.utilities',
        'starter.listLoved', 'starter.mediRec', 'starter.add_mediRec', 'services.common.http_post'],
    function ($httpProvider) {
        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}


         */
        var param = function (obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.landing_page', {
                url: '/landing_page',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/landing_page.html'
                    }
                }
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/dashboard.html'
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/register.html'
                    }
                }
            })
            .state('app.add_loved_ones', {
                url: '/add_loved_ones',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/loved_ones/add_loved_ones.html'
                    }
                }
            })
            .state('app.list_loved_ones', {
                url: '/list_loved_ones',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/loved_ones/list_loved_ones.html'
                    }
                }
            })
            .state('app.favorite_prescription', {
                url: '/favorite_prescription',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/prescription/favorite_prescription.html'
                    }
                }
            })
            .state('app.medical_records', {
                url: '/medical_records',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/medical_records/medical_records_new.html'
                    }
                }
            })
            .state('app.calendar_events', {
                url: '/calendar_events',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/calendar/calendar_events.html'
                    }
                }
            })
            .state('app.canvas', {
                url: '/canvas',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/medical_records/canvas.html'
                    }
                }
            })
            .state('app.fav_pres', {
                url: '/fav_pres',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/prescription/favorite_prescription.html'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/landing_page');
    });


function getController(controllerName) {
    var scope = angular.element(document.querySelector('[ng-controller=' + controllerName + ']')).scope();
    return scope;
}
