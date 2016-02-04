var expanderModule = angular.module('ExpanderModule', []);

expanderModule.controller('MyController', ['$scope', function($scope){
    $scope.title = '新版“土豪金”100元人民币实物首曝！闪瞎眼';
    $scope.content = '今天，2015年版第五套人民币100元纸币正式发行，由于垂直观察，数字“100”以金色为主，被网友们戏称“土豪金”版百元人民币。';
}])

expanderModule.directive('expander', function(){
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope: {
            title: '=expanderTitle'
        },
        template: '<div class="expander">' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="content" ng-transclude="" ng-show="isShow"></div>' +
        '</div>',
        link: function(scope, element, attrs){
            scope.isShow = false;
            scope.toggle = function(){
                scope.isShow = !scope.isShow;
            }
        }
    }
})
