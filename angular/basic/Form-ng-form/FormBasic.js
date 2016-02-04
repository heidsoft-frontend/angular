var formModule = angular.module('FormModule', []);

formModule.controller('FormController', ['$scope', function($scope){
    $scope.users = [
        {
            username: 'Jeffery',
            email: ''
        },
        {
            username: 'Kevin',
            email: ''
        }
    ]
    $scope.submit = function(){
        console.log($scope.myForm);
        console.log('保存数据');
    }
}])