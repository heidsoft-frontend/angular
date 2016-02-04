var myModule = angular.module('MyModule', []);

myModule.controller('MyController', function($scope){
    $scope.heat = '韦德',
        $scope.cleveland = '勒布朗';
})

//@绑定传递的是字符串
myModule.directive('at', function(){
    return {
        restrict: 'E',
        scope: {
            wade: '@',
            lebron: '@'
        },
        template: '<h1>{{wade}}</h1><h2>{{lebron}}</h2>'
    }
})