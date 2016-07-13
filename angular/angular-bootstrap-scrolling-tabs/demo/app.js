/**
 * FileName app
 * Date 2016-07-11
 * Created by jianglinj
 */
// --------------- app.js ---------------------------
(function () {
    'use strict';

    angular.module('myapp', ['ui.router', 'mj.scrollingTabs']);

    angular.module('myapp').config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            var tabOpt = {
                "main.tab1": {
                    templateUrl: "tabs/tab1/tab1.html",
                    controller: 'tab1Controller'
                },
                "main.tab2": {
                    templateUrl: "tabs/tab2/tab2.html",
                    controller: 'tab2Controller'
                },
                "main.tab3": {
                    templateUrl: "tabs/tab3/tab3.html"
                },
                "main.tab4": {
                    templateUrl: "tabs/tab4/tab4.html"
                },
                "main.tab5": {
                    templateUrl: "tabs/tab5/tab5.html"
                }
            }

            $stateProvider.state('main', {
                url: '/main',
                views: tabOpt
            });

            $stateProvider.state('main.subTab2', {
                url: '/subTab2',
                views: {
                    "": {
                        templateUrl: "tab2/subTab2/subTab2.html"
                    }
                }
            });

            $urlRouterProvider.otherwise('main');
        }]);

}());