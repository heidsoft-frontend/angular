var routerApp = angular.module('RouterApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/about');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls/home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'tpls/home-list.html',
            controller: function($scope){
                $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a scoop of ice-cream. ',
            controller: function($scope){
                $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
            }
        })
        .state('about', {
            url: '/about',
            views: {
                '': {
                    templateUrl: 'tpls/about.html'
                },
                'columnOne@about': {
                    template: '这里是第一列的内容'
                },
                'columnTwo@about': {
                    templateUrl:'tpls/table-data.html',
                    controller: 'routerCtrl'
                }
            }
        })
})

routerApp.controller('routerCtrl', function($scope){
    $scope.topics = [{
        name: 'Butterscotch',
        price: 50
    }, {
        name: 'Black Current',
        price: 100
    }, {
        name: 'Mango',
        price: 20
    }];
})