'use.strict'
/*
 * common/constants.js
 *
 * (c) 2014 Vincent Maliko http://frnchnrd.com
 * License: MIT
 */

angular.module('services.common.constants',[])

.factory('Constants',[function(){

  var _API = {
  	baseUrl: "http://authenticate-app-me.herokuapp.com"
    //baseUrl: "http://localhost:3000"
  }

  var _img = {
    avatar : "img/avatar.png",
    profile_bg : "img/bg_new.png"
  }

  var _timeouts = {
    collection: {
      user : 0
    }
  }
  var _colors = [ "positive",
                  "calm",
                  "balanced",
                  "energized",
                  "assertive",
                  "royal",
                  "dark",
                  "stable"];



  var _menulist = [
      {
        id: 1,
        name: "Emergency Contact",
        icon: ""
      },
      {
        id: 2,
        name: "Vital/ clinical Parameters",
        icon: ""
      },
      {
        id: 3,
       name: "Medical records",
        icon: ""
      },
      {
        id: 4,
        name: "Insurance",
        icon: ""
      },
      {
        id: 5,
         name: "Medical bills",
        icon: ""
      },
      {
        id: 6,
       name: "Identity library",
        icon: ""
      },
      {
        id: 7,
         name: "My Health Accounts",
        icon: ""
      },
      {
        id: 8,
     name: "My Health Pics",
        icon: ""
      },
      {
        id: 9,
        name: "My Social habits",
        icon: ""
      },
      {
        id: 10,
       name: "My health providers",
        icon: ""
      }

  ];



  var constants = {
    DEBUGMODE : false,
    SHOWBROADCAST_EVENTS : true,
    API: _API,
    IMG: _img,
    timeouts: _timeouts,
    menulist: _menulist
  };



   return {
      all: function() {
        return constants;
      },
      getColor: function(index) {
        return _colors[index];
      },
      getColors: function() {
        return _colors;
      },
      setMenus: function(menulist) {
        _menulist = menulist;
      }
    };
}])
