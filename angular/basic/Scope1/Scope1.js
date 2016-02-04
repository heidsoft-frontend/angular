function GreetCtrl($scope, $rootScope){
    $scope.name = 'world';
    $rootScope.department = 'Angular';
}

function ListCtrl($scope){
    $scope.names = ['Igor', 'Misko', 'Vojta'];
}