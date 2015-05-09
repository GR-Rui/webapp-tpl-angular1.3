'use strict';

/**
 * @ngdoc function
 * @name cimWebappApp.controller:TeacherTextbookCtrl
 * @description
 * # TeacherTextbookCtrl
 * Controller of the cimWebappApp
 */
Site.controller('TeacherTextbookCtrl', function ($scope) {
  console.log('TeacherTextbookCtrl');

  $scope.treeOptions = {
    nodeChildren: "children",
    dirSelectable: true,
    injectClasses: {
      ul: "a1",
      li: "a2",
      liSelected: "a7",
      iExpanded: "a3",
      iCollapsed: "a4",
      iLeaf: "a5",
      label: "a6",
      labelSelected: "a8"
    }
  };
  $scope.dataForTheTree =
    [
      { "name": "听力资料",
        "share": true,
        "children": [
          { "name": "听力资料sub1",
            "share": true,
            "children": []
          },
          { "name": "听力资料2",
            "share": false,
            "children": [
              { "name": "听力资料sub2",
                "share": true,
                "children": [
                  { "name": "听力资料111", "share": true, "children": [] },
                  { "name": "听力资料22222", "share": true, "children": [] }
                ]}
            ]}
        ]},
      { "name": "协作资料", "share": true, "children": [] },
      { "name": "完形天空", "share": false, "children": [] }
    ];

  $scope.sharedTextbooks = [
    {name: "张三", sex: "男", num: "2"},
    {name: "李四", sex: "女", num: "3"},
    {name: "王五", sex: "女", num: "1"}
  ];

});
