myApp.controller('home', function($scope, aBreak) {
  // var $scope.Break = {};
  // console.log(aBreak.getBreak());
  var getABreak = function() {
    aBreak.getBreak().then(function(someBreak) {
      console.log('Home.js - Get a Break: ', someBreak);
      // $scope.title = someBreak.title;
      // $scope.description = someBreak.description;
    });
  };
  getABreak();
  // var specificBreak =
  // aBreak.getBreak().then(function(someBreak) {
  //   console.log('Home.js - Get a Break: ', someBreak);
  //   // $scope.title = someBreak.title;
  //   // $scope.description = someBreak.description;
  // });
  console.log('Home.js - Got the specificBreak: ', specificBreak);
  // $scope.title = specificBreak.title;
  // $scope.description = specificBreak.description;
});