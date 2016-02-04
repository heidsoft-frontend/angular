angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      template: '\
        <a href="#inbox/ari">View Your Inbox</a>\
      '
    })
    .when('/inbox/:name', {
      controller: 'InboxController',
      template: '\
        <h1>Welcome to your inbox, {{ name }}</h1>\
        <a href="#/">Back</a>\
      '
    })
    .otherwise({redirectTo: '/'});
}])

.controller('HomeController', function($scope, $location) {
  // define controller to prevent console error
  //    $location.url('/inbox/ari');
      $location.path('/inbox/ari');
      console.log('path: ' + $location.path());
      console.log('url: ' + $location.url());
})

.controller('InboxController', function($scope, $routeParams, $location) {
  $scope.name = $routeParams.name;
});