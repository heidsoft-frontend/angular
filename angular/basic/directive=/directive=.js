var myModule = angular.module('MyModule', []);

myModule.controller('myCtrl', ['$scope', function($scope){
    $scope.name = '韦德';
}])

myModule.directive('hello', function(){
    return {
        restrict: 'E',
        scope: {
            directivenameTest: '=directivename'
        },
        template: '<div><input type="text" ng-model="directivenameTest"/></div>'
    }
})