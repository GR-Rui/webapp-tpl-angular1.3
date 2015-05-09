'use strict';

/**
 * @ngdoc function
 * @name cimWebappApp.controller:VideoHomeCtrl
 * @description
 * # VideoHomeCtrl
 * Controller of the cimWebappApp
 */
Site.controller('VideoHomeCtrl', ['$scope', '$sce', function ($scope, $sce) {

  $scope.shareVideos = [
    {id: 1, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'},
    {id: 2, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'},
    {id: 3, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'},
    {id: 4, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'},
    {id: 4, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'},
    {id: 4, name: '五单元练习第3题', type: 'mp4', dataTime: '2014-05-04 17:24:59'}
  ];

  this.config = {
    preload: "none",
    sources: [
      {src: $sce.trustAsResourceUrl("http://localhost:9000/cloud/data/videos/videogular.mp4"), type: "video/mp4"},
      {src: $sce.trustAsResourceUrl("http://localhost:9000/cloud/data/videos/videogular.webm"), type: "video/webm"},
      {src: $sce.trustAsResourceUrl("http://localhost:9000/cloud/data/videos/videogular.ogg"), type: "video/ogg"}
    ],
    tracks: [
      {
        src: "http://localhost:9000/cloud/data/videos/subs/pale-blue-dot.vtt",
        kind: "subtitles",
        srclang: "en",
        label: "English",
        default: ""
      }
    ],
    theme: {
      url: "bower_components/videogular-themes-default/videogular.css"
    }
  };
}]);
