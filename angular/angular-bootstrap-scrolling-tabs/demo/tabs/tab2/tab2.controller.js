/**
 * FileName tab1.controller
 * Date 2016-07-12
 * Created by jianglinj
 */
(function(){
    angular.module('myapp').controller('tab2Controller', function ($scope, $state) {
        $scope.datas = {
            title: 123,
            value: 'tab2'
        }

        $scope.go = function(){
            $state.go('main.subTab2');
        }
    });
})()