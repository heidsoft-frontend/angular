var filterApp = angular.module('FilterApp', []);

filterApp.controller('FilterController', ['$scope', function ($scope) {
    $scope.date = new Date();
}])