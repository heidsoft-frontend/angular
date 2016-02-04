var myServiceApp = angular.module('MyServiceApp', []);

myServiceApp.factory('userListService', ['$http',
    function($http){
        function doRequest(method, url){
            return $http({
                method: method,
                url: url
            })
        }
        return {
            getUserList: doRequest
        }
    }
])

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService',
    function($scope, $timeout, userListService){
        var timeout;
        $scope.$watch('username', function(username){
            if(username){
                if(timeout){
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(function () {
                    userListService.getUserList('get', 'users')
                        .success(function (data, status) {
                            $scope.users = data;
                        })
                }, 500)
            }
        })
    }
])



