var routerApp = angular.module('RouterApp', ['ui.router']);


//@会寻找上一级页面的ui-view 如果无上级则不用写@
routerApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                'main': {
                    templateUrl: 'tpls/home.html'
                },
                'topbar': {
                    templateUrl: 'tpls/topbar.html'
                }
            }
        })
        .state('usermng', {
            url: '/usermng',
            views: {
                'main': {
                    templateUrl: 'tpls/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("usermng.addusertype");
                        }
                    }
                },
                'topbar': {
                    templateUrl: 'tpls/topbar.html'
                }
            }
        })
        .state('usermng.addusertype', {
            url: '/addusertype',
            views: {
                'main@usermng': {
                    templateUrl: 'tpls/addusertypeform.html',
                    controller: function($scope, $state) {
                        $scope.backToPrevious = function() {
                            window.history.back();
                        }
                    }
                }
            }
        })
        .state('usermng.highendusers', {
            url: '/highendusers',
            views: {
                'main@usermng': {
                    templateUrl: 'tpls/highendusers.html'
                }
            }
        })
        .state('usermng.normalusers', {
            url: '/normalusers',
            views: {
                'main@usermng': {
                    templateUrl: 'tpls/normalusers.html'
                }
            }
        })
        .state('usermng.lowusers', {
            url: '/lowusers',
            views: {
                'main@usermng': {
                    templateUrl: 'tpls/lowusers.html'
                }
            }
        })
        .state('permission', {
            url: '/permission',
            views: {
                'main': {
                    template: '这里是权限管理'
                },
                'topbar': {
                    templateUrl: 'tpls/topbar.html'
                }
            }
        })
        .state('report', {
            url: '/report',
            views: {
                'main': {
                    template: '这里是报表管理'
                },
                'topbar': {
                    templateUrl: 'tpls/topbar.html'
                }
            }
        })
        .state('settings', {
            url: '/settings',
            views: {
                'main': {
                    template: '这里是系统设置'
                },
                'topbar': {
                    templateUrl: 'tpls/topbar.html'
                }
            }
        })
})
