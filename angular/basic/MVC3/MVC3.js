function controller1($scope){
    $scope.greeting = {
        text: 'Hello111'
    }
    $scope.welcome1 = function(){
        console.log($scope.greeting.text);
    }
}

function controller2($scope){
    $scope.greeting = {
        text: 'Hello222'
    }
    $scope.welcome2 = function(){
        console.log($scope.greeting.text);
    }
}

function commonController($scope){
    $scope.greeting = {
        text: 'Hello Common'
    }
    $scope.commonWelcome = function(){
        console.log($scope.greeting.text);
    }
}