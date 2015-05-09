'use strict';

/**
 * @ngdoc overview
 * @name cimWebappApp
 * @description
 * # cimWebappApp
 *
 * Main module of the application.
 */
var Site = angular.module('Site', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'smart-table',
  "com.2fdevs.videogular",
  "treeControl"
]);

Site.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      "use strict";

      $stateProvider
        .state('teacher', {url: '/teacher/:id', templateUrl: 'views/teacher/home.html'})
        .state('teacher-course', {url: '/teacher/:id/course-manager', templateUrl: 'views/teacher/course.manager.html'})
        .state('teacher-course-group', {url: '/teacher/:id/course-group', templateUrl: 'views/teacher/course.group.html'})
        .state('teacher-name-edit', {url: '/teacher/:id/name-edit', templateUrl: 'views/teacher/name.edit.html'})
        .state('teacher-seat-edit', {url: '/teacher/:id/seat-edit', templateUrl: 'views/teacher/seat.edit.html'})
        .state('teacher-student-add', {url: '/teacher/:id/student-add', templateUrl: 'views/teacher/student.add.html'})
        .state('teacher-group', {url: '/teacher/:id/group-manager', templateUrl: 'views/teacher/group.manager.html'})
        .state('teacher-video', {url: '/teacher/:id/video-home', templateUrl: 'views/teacher/video.home.html'})
        .state('teacher-video-detail', {url: '/teacher/:id/video-detail/:vid', templateUrl: 'views/teacher/video.detail.html'})
        .state('teacher-textbook', {url: '/teacher/:id/textbook', templateUrl: 'views/teacher/textbook.html'})
        .state('teacher-textbook-share', {url: '/teacher/:id/textbook-share', templateUrl: 'views/teacher/textbook.share.html'})
        .state('teacher-paper-personage', {url: '/teacher/:id/paper-personage', templateUrl: 'views/teacher/paper.personage.html'})

        .state('login', {url: '/login', templateUrl: 'views/login.html', controller: 'LoginCtrl'});
      $urlRouterProvider.otherwise('/login');

    }]);
