ngApp.controller('login', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){
    var vm = $scope.vm = {
        user: {}
    }
    $scope.formSubmit = function(){
        $window.location.href= "/#/list";
    }
}])