var ngApp = angular.module('NgApp', ['ui.router', 'ngAnimate']);
ngApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('/', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'views/login.html',
                    controller: 'login'
                }
            }
        })
        .state('list', {
            url: '/list',
            views: {
                '': {
                    templateUrl: 'views/list.html'
                }
            }
        })
        .state('detail', {
            //坑爹的东西 怎么理解啊
            //url: '/detail/:id',
            url: '/detail?id&age&sex',
            views: {
                '': {
                    templateUrl: 'views/detail.html'
                }
            }
        })
})