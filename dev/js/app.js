var App = (function (window, document, undefined) {

  'use strict';

  var SETTINGS = {
    welcome: 'ola _)\_'
  };

  var st = {
    triggerAlert: '.js-alert',
  };

  var dom = {};

  var catchDom = function () {
    dom.$triggerAlert = $(st.triggerAlert);
  };

  var susbscribeEvents = function () {
    dom.$triggerAlert.on('click', events.alertMessage);
  };

  var events = {
    alertMessage: function () {
      console.log(SETTINGS.welcome);
    }
  };

  var fn = {};

  var init = function () {
    catchDom();
    susbscribeEvents();
  };

  return {
    init: init
  };

}(window, document));
