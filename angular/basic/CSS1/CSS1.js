var colorApp = angular.module('colorApp', []);

colorApp.controller('colorCtrl', ['$scope', function($scope){
    $scope.color = 'green';

    $scope.setColor = function(){
        $scope.color = 'red';
    }
}])