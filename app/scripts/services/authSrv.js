Site.factory('AuthSrv', function ($http, ConfigConst) {
  "use strict";

  return function () {


    /**
     * Send login request to server
     *
     * @param data object containing info needed to login
     */
    var getSession = function (data) {
      return $http
        .get(ConfigConst.urls.api + 'session.json', data)
        .then(function (res) {
          return res;
        });
    };

    return {

      /**
       * format encrpt data, then make rest call
       *
       * @param userIdOrToken
       * @param password
       */
      login: function (userIdOrToken, password) {
        var data;
        var self = this;

        data = { };

        return getSession(data);
      }

    };
  }();

});