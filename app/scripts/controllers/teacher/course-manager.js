'use strict';

/**
 * @ngdoc function
 * @name cimWebappApp.controller:CourseManagerCtrl
 * @description
 * # CourseManagerCtrl
 * Controller of the cimWebappApp
 */
Site.controller('CourseManagerCtrl', ['$scope', '$filter', function ($scope, $filter) {
  console.log("CourseManagerCtrl");

  $scope.studentsByGroup = [
    {
      groupId:0,
      groupName: '未分组',
      students: [
        {sitNum: 8, name: 'xxxx', identity: '08521', sex: 1, id: '900017'},
        {sitNum: 9, name: 'jjj', identity: '08521', sex: 1, id: '900018'},
        {sitNum: 10, name: 'kkk', identity: '08521', sex: 1, id: '900019'}
      ]
    },
    {
      groupId:1,
      groupName: '第一组',
      students: [
        {sitNum: 1, name: 'Renard', identity: '08521', sex: 1, id: '90001'},
        {sitNum: 2, name: 'aaaa', identity: '08521', sex: 1, id: '900011'},
        {sitNum: 6, name: 'eeeeeee', identity: '08521', sex: 1, id: '900015'},
        {sitNum: 7, name: 'ffffffff', identity: '08521', sex: 1, id: '900016'}
      ]
    },
    {
      groupId:2,
      groupName: '第二组',
      students: [
        {sitNum: 3, name: 'bbbb', identity: '08521', sex: 1, id: '900012'},
        {sitNum: 4, name: 'cccc', identity: '08521', sex: 1, id: '900013'},
        {sitNum: 5, name: 'dddddd', identity: '08521', sex: 1, id: '900014'}
      ]
    }
  ];

  $scope.studentsByCourse = [
    {sitNum: 1, name: 'Renard', identity: '08521', sex: 1, id: '90001', groupId: 1, groupName: '第1组'},
    {sitNum: 2, name: 'aaaa', identity: '08521', sex: 1, id: '900011', groupId: 1, groupName: '第1组'},
    {sitNum: 3, name: 'bbbb', identity: '08521', sex: 1, id: '900012', groupId: 2, groupName: '第2组'},
    {sitNum: 4, name: 'cccc', identity: '08521', sex: 1, id: '900013', groupId: 2, groupName: '第2组'},
    {sitNum: 5, name: 'dddddd', identity: '08521', sex: 1, id: '900014', groupId: 2, groupName: '第2组'},
    {sitNum: 6, name: 'eeeeeee', identity: '08521', sex: 1, id: '900015', groupId: 1, groupName: '第1组'},
    {sitNum: 7, name: 'ffffffff', identity: '08521', sex: 1, id: '900016', groupId: 1, groupName: '第1组'},
    {sitNum: 8, name: 'xxxx', identity: '08521', sex: 1, id: '900017'},
    {sitNum: 9, name: 'jjj', identity: '08521', sex: 1, id: '900018'},
    {sitNum: 10, name: 'kkk', identity: '08521', sex: 1, id: '900019'}
  ];

  $scope.availableGroupStudents =  $scope.studentsByGroup[0].students;

  $scope.groupsByCourse = [
    {id: -1, name: '未分组'},
    {id: 1, name: '第一组'},
    {id: 2, name: '第二组'}
  ];
  $scope.selectedGroup = $scope.groupsByCourse[0];
  $scope.selectedMoveGroup = $scope.groupsByCourse[0];
  $scope.selectedGroupStudents =  [];

  $scope.getters = {
    name: function (value) {
      //this will sort by the length of the first name string
      return value.name.length;
    }
  };


  $scope.availableGrades = ['2011', '2012', '2013', '2014', '2015'];
  $scope.availableCourses = ['平面设计', '计算机网络', '音乐', '历史', '英语'];

  $scope.changeSelectedGroupStudents = function(){
    var selected = $scope.selectedGroup;
    var group = _.find($scope.studentsByGroup, function(obj) {
      return obj.groupId == selected.id;
    });
    if(typeof group != 'undefined') {
      $scope.selectedGroupStudents = group.students;
    }else{
      var idx = $scope.studentsByGroup.length-1;
      var gidx = $scope.groupsByCourse.length;
      if(idx >= gidx) {
        $scope.selectedGroupStudents = $scope.studentsByGroup[idx].students;
      }else{
        $scope.selectedGroupStudents = [];
      }

    }


  };


  $scope.checkAll = function () {
    if ($scope.checkedAll) {
      $scope.checkedAll = true;
    } else {
      $scope.checkedAll = false;
    }
    angular.forEach($scope.studentsByCourse, function (item) {
      item.checked = $scope.checkedAll;
    });

  };

  // group page

  /*
  ** negative: default is undefined, or else is reverse direction
   */
  $scope.moveItems = function (items, from, to, negative) {

    if (_.isObject(items) && !_.isArray(items)) {
      items = [items];
    }
    angular.forEach(items, function (item) {
      var idx = from.indexOf(item);
      if (idx != -1) {
        from.splice(idx, 1);
        to.push(item);
      }
    });
    if(typeof negative == 'undefined') {
      refreshModel(to);
    }else{
      refreshModel(from);
    }
  };

  $scope.moveAll = function (from, to, negative) {

    console.log('Move all  From:: ' + from + ' To:: ' + to);
    //Here from is returned as blank and to as undefined

    angular.forEach(from, function (item) {
      to.push(item);
    });
    from.length = 0;
    if(typeof negative == 'undefined') {
      refreshModel(to);
    }else{
      refreshModel(from);
    }
  };

  function refreshModel(to) {
    var id = $scope.selectedGroup.id;
    if(id != -1) {
      angular.forEach($scope.studentsByGroup, function (item) {
        if(item.groupId == id) {
          item.students = to;
        }
      });
    }else{
      var newId = $scope.groupsByCourse.length;
      var name = 'new';
      var group = {
        groupId: newId,
        groupName: name,
        students: to
      };
      $scope.studentsByGroup.push(group);
    }
  }

}]);
