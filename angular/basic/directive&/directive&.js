var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.sayHello = function(name){
        console.log('Hello ' + name);
    }
}]);

myModule.directive('hello', function(){
    return {
        restrict: 'AE',
        scope: {
            greeting: '&'
        },
        template: '<input type="text" ng-model="greetingName"/><div><button ng-click="greeting({name: greetingName})">Greeting</button></div>'
    }
})