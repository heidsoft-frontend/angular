var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('HeaderController', ['$scope',
    function($scope) {

        $scope.showError = function(){
            $scope.isError = true;
            $scope.isWarning = false;
            $scope.messageText = 'This is an error!';
        }

        $scope.showWarning = function(){
            $scope.isError = false;
            $scope.isWarning = true;
            $scope.messageText = 'Just a warning. Please carry on.';
        }

    }
])