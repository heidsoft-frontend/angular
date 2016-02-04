var userInfoModule = angular.module('UserInfoModule', []);

userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
    $scope.userInfo = {
        email: '253445528@qq.com',
        password: '253445528',
        autoLogin: true
    };

    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };

    $scope.setFormData = function(){
        console.log('setting');
        $scope.userInfo = {
            email: '306796405@qq.com',
            password: '73742188725',
            autoLogin: false
        }
    };

    $scope.resetForm = function(){
        $scope.userInfo = {
            email: "253445528@qq.com",
            password: "253445528",
            autoLogin: true
        };
    };
}])