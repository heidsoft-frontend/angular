var myUIRoute = angular.module('MyUIRoute', ['ui.router']);
myUIRoute.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/sports');
    $stateProvider
        .state('sports', {
            url: '/sports',
            templateUrl: 'tpls/sports.html'
        })
        .state('sports.list', {
            url: '/list',
            templateUrl: 'tpls/sports.list.html',
            controller: function ($scope) {
                console.log('sports controller');
                $scope.items = [
                    '科比：我现在是NBA第200人 太烂什么球都不进',
                    '曝哈登劳森战热火前夜店狂欢 凌晨4点带妞离开',
                    '22+15+4+4！湖人暗夜一抹强光 奥多姆接班人',
                    '全场15中2三分10中0 这还是詹姆斯-哈登吗？',
                    '热火逆袭事出有因 麦帅：这不是哈登这不是火箭'
                ];
                location.href = 'http://www.baidu.com'
            }
        })
        .state('science', {
            url: '/science',
            templateUrl: 'tpls/science.html'
        })
        .state('science.list', {
            url: '/list',
            templateUrl: 'tpls/science.list.html',
            controller: function ($scope) {
                console.log('science controller');
                $scope.items = [
                    '中航无人机设计大赛 满满全是黑科技',
                    'C919打破国外封锁 逼空客/波音换发动机',
                    '149元！诺基亚105国行开卖 最佳二奶机',
                    '福岛核电站检测出高剂量辐射：超当年23倍'
                ]
            }
        })
})

function delParam(option) {
    var i;
    if ("string" === typeof option) {
        option = option.split(",");
        for (i in option) {
            delete this.paras[option[i]]
        }

    }
    return this.build();
}