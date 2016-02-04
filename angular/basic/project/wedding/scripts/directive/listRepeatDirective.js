//在页面上写必须是 list-repeat-directive
//加了scope: {}为什么数据不展示
ngApp.directive('listRepeatDirective', ['$http', '$sce', 'getListService', function($http, $sce, getListService){
    return {
        restrict: 'AE',
        controller: function($scope){

        },
        link: function(scope, ele, attrs){
            getListService.getList().success(function(data){
                scope.lists = data;
                angular.forEach(data, function(value, index){
                    scope.lists[index].title = $sce.trustAsHtml(value.title);
                })
                //获得数据后会自动渲染页面，需给浏览器0.2秒的渲染时间，再初始化iscroll，对用户也不会有影响
                setTimeout(function(){
                    new iScroll('wrapper', { scrollbarClass: 'myScrollbar' });
                },0)
            })
        }
    }
}])