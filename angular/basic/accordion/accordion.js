var myModule = angular.module('MyModule', []);

myModule.directive('accordion', function(){
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        controller: function(){
            var expandersScope = [];
            this.addExpander = function(expanderScope){
                expandersScope.push(expanderScope);
            }
            this.hideContent = function(expanderScope){
                angular.forEach(expandersScope, function(scope, index){
                    if(expanderScope != scope){
                        scope.isShow = false;
                    }
                })
            }
        }
    }
})

myModule.directive('expander', function(){
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        /*如果想要指向上游的指令，那么就是用^进行修饰，比如require:'^parentDirective'，如果没有找到，那就会抛出一个错误。
        如果使用？前缀，就意味着如果在当前指令没有找到控制器，就将null作为link的第四个参数；
        那么，如果将？和^结合起来，我们就可以既指定上游指令，又可以在找不到时，不抛出严重的错误。*/
        require: '^?accordion',
        scope: {
            title: '=expanderTitle'
        },
        controller: function(){
            this.name = 'I am controller';
        },
        controllerAs: 'expanderCtrl',
        template: '<div class="expander"> <div class="title" ng-click="showContent()">{{title}}</div> <div class="content" ng-transclude="" ng-show="isShow"></div> <p>{{expanderCtrl.name}}</p></div>',
        link: function(scope, ele, attrs, accordionCtrl){
            scope.isShow = false;
            accordionCtrl.addExpander(scope);
            scope.showContent = function(){
                scope.isShow = true;
                accordionCtrl.hideContent(scope);
            }
        }
    }
})

myModule.controller('MyController', ['$scope', function($scope){
    $scope.expanders = [
        {
            title: '内外兼修 149元魅族移动电源体验评测',
            content: '现如今，电脑性能越来越高，手机做的越来越薄，屏幕显示也愈发清晰细腻，触控技术日渐炉火纯青。智能时代下移动终端变的更加便捷和聪慧，小到3D Touch按压操作，大到遍地WIFI无线互联……'
        },
        {
            title: '4999元！索尼Z5国行价格确认：喜欢请众筹',
            content: '上月29号，索尼Xperia Z5双旗舰国行版正式在北京发布，其中，索尼主打的4K屏手机Z5尊享版定价5699元，昨日已经正式上市。'
        },
        {
            title: '科学家发现巨型黑洞：重140000000个太阳',
            content: '这个巨大的黑洞位于遥远的棒状星系NGC 1097中央，科学家发现由于该黑洞的存在，星系内部的恒星形成受到了影响。值得注意的是，我们银河系中央黑洞质量仅为400万倍太阳质量，相比较而言，银河系黑洞弱爆了。'
        }
    ]
}])