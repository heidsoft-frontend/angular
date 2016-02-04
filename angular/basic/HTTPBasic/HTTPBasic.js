var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'get',
        url: 'data.json'
    }).success(function(data, status, headers, config){
        $scope.users = data;
    })
}])