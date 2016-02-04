var helloAngularBind = angular.module('HelloAngularBind', []);

helloAngularBind.controller('HelloAngularCtrl', ['$scope', function($scope){
    $scope.greeting = {
        text: 'Hello'
    }
}])