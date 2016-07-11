var myUIRoute = angular.module('MyUIRoute', ['ui.router']);
myUIRoute.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('first', {
            url: '/',
            views: {
                "": {
                    template: "<h1>HELLO!</h1>"
                },
                "chart": {
                    template: "chart"
                },
                "data": {
                    template: "data"
                }
            }
        })
})