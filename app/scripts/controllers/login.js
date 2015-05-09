'use strict';

/**
 * @ngdoc function
 * @name cimWebappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cimWebappApp
 */
Site.controller('LoginCtrl',['$scope', 'AuthSrv', '$state', function ($scope, AuthSrv, $state) {

  $scope.login = function () {
    AuthSrv.login($scope.form.user, $scope.form.pass)
      .then(function (session) {
        var user = session.data;

        var redirectUrl = undefined;
        if (redirectUrl) {
          $location.path(redirectUrl);
        } else {
          switch(user.position) {
            case 'teacher':
              $state.go('teacher',{id: user.userId});
              break;
            case 'student':
              $state.go('student.center',{id: user.userId});
              break;
            case 'admin':
              $state.go('admin.center',{id: user.userId});
              break;
            case 'systemAdmin':
              $state.go('systemadmin.center',{id: user.userId});
              break;
          }
        }
      })
      .catch(function () {
        $scope.loginFailed = true;
      })
      .finally(function () {
        $scope.loggingIn = false;
      });
  };
}]);
