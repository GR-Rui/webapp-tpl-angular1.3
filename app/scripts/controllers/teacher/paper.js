'use strict';

/**
 * @ngdoc function
 * @name cimWebappApp.controller:TeacherPaperCtrl
 * @description
 * # TeacherPaperCtrl
 * Controller of the cimWebappApp
 */
Site.controller('TeacherPaperCtrl', function ($scope) {
  console.log('TeacherPaperCtrl');

  $scope.paperPersonage = [
    {id: 1, name: "14yingyu", type: "资讯", date: "2015-05-02", count:"10"},
    {id: 2, name: "14yingyu", type: "历史", date: "2015-05-02", count:"4"},
    {id: 3, name: "14yingyu", type: "政治", date: "2015-05-02", count:"5"},
    {id: 4, name: "14yingyu", type: "资讯", date: "2015-05-02", count:"6"}
  ];

});
