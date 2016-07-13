/**
 * FileName MainController
 * Date 2016-07-11
 * Created by jianglinj
 */
;(function () {
    'use strict';

    function MainController(MainService) {
        var ctrl = this;

        ctrl.uc1Tabs = MainService.data.uc1Tabs;

        ctrl.handleClickOnTab = function (e, idx, tab) {

        };

        ctrl.addBtn = function(){
            debugger;
            ctrl.uc1Tabs.push(
            {
                paneId: 'uc1tab03',
                title: 'Tab <strong>3</strong> of 12',
                content: '<input type="text">',
                active: true,
                disabled: false
            })
        }
    }

    MainController.$inject = ['MainService'];

    angular.module('myapp').controller('MainController', MainController);

    angular.module('myapp').filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    });
}());
