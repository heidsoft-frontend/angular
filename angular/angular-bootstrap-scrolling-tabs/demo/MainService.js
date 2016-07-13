/**
 * FileName MainService
 * Date 2016-07-11
 * Created by jianglinj
 */
;(function () {
    'use strict';

    var uc1Tabs = [];

    function MainService($timeout) {
        var svc = this;

        svc.data = {
            uc1Tabs: uc1Tabs
        };
    }

    MainService.$inject = ['$timeout'];

    angular.module('myapp').service('MainService', MainService);
}());
