var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.master = {};

    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    }

    $scope.update = function(user){
        $scope.master = angular.copy(user);
    }

    $scope.isUnChanged = function(user){
        return angular.equals(user, $scope.master);
    }

    $scope.reset();
}])