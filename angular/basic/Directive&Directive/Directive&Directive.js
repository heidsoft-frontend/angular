var myModule = angular.module('MyModule', []);
//restrict 默认值是什么
//scope: {} 独立作用域是什么
//require ^superman 怎么理解
myModule.directive('superman', function(){
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope){
            $scope.abilities = [];
            this.addStrength = function(){
                $scope.abilities.push("strength");
            }
            this.addSpeed = function(){
                $scope.abilities.push("speed");
            }
            this.addLight = function(){
                $scope.abilities.push("light");
            }
        },
        link: function(scope, element, attrs){
            element.addClass('btn btn-primary');
            element.bind('mouseenter', function(){
                console.log(scope.abilities);
            })
        }
    }
})

myModule.directive('strength', function(){
    return {
        require: '^superman',
        restrict: 'A',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addStrength();
        }
    }
})


myModule.directive('light', function(){
    return {
        require: '^superman',
        restrict: 'A',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addLight();
        }
    }
})


myModule.directive('speed', function(){
    return {
        require: '^superman',
        restrict: 'A',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addSpeed();
        }
    }
})

