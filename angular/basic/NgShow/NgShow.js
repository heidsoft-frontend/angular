var ngShowApp = angular.module('NgShowApp', []);
ngShowApp.controller('NgShowCtrl', ['$scope',
    function($scope){
        $scope.menuState = {
            show: false
        };

        $scope.toggleMenu = function(){
            $scope.menuState.show = !$scope.menuState.show;
        }
    }
])
