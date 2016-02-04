var myModule = angular.module('MyModule', []);

myModule.directive('loader', function(){
    return {
        restrict: 'AE',
        link: function(scope, ele, attrs){
            ele.bind('mouseenter', function(){
                scope.$apply(attrs.howtoload);
            })
        }
    }
})

myModule.controller('MyCtrl1', function($scope){
    $scope.loadData = function(){
        console.log('loading way 11111111');
    }
})

myModule.controller('MyCtrl2', function($scope){
    $scope.loadData2 = function(){
        console.log('loading way 222222222');
    }
})