var myApp = angular.module('app', []);
myApp.controller('TestControl', function ($scope) {
    /*$scope.sex = {
        male: true,
        female: false
    }*/
    $scope.showInfo = function(sex){
        console.log(sex);
    }
})
