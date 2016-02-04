var myModule = angular.module('MyModule', []);

myModule.directive('hello', function(){
    return {
        restrict: 'E',
        scope: {},
        template: '<div><input type="text" ng-model="name"/><h1>{{name}}</h1></div>'
    }
})