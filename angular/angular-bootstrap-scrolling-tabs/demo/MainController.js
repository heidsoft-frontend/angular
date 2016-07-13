/**
 * FileName MainController
 * Date 2016-07-11
 * Created by jianglinj
 */
;(function () {
    'use strict';

    function MainController(MainService) {
        var ctrl = this;

        ctrl.leftNavs = [
            { title: "My Tab 1", route: "main.tab1", state: 'main.tab1'},
            { title: "My Tab 2", route: "main.tab2", state: 'main.tab2'},
            { title: "My Tab 3", route: "main.tab3", state: 'main.tab3'},
            { title: "My Tab 4", route: "main.tab4", state: 'main.tab4'},
            { title: "My Tab 5", route: "main.tab5", state: 'main.tab5'}
        ]

        ctrl.uc1Tabs = MainService.data.uc1Tabs;

        ctrl.clickTab = function (idx) {
            ctrl.setTab(idx)
        };

        ctrl.addTab = function (opt) {
            var idx = filterTab(opt);
            if(isNaN(idx)){
                opt.active = true;
                ctrl.uc1Tabs.push(opt)
            }else{
                ctrl.setTab(idx);
            }
        }

        function filterTab(tab){
            var idx;
            angular.forEach(ctrl.uc1Tabs, function (item, i) {
                item.active = false;
                if(item.title === tab.title){
                    idx = i;
                    tab.active = true;
                }
            })
            return idx;
        }

        ctrl.closeTab = function(index){
            if(ctrl.uc1Tabs[index].active === true){
                ctrl.uc1Tabs[0].active = true;
            }
            ctrl.uc1Tabs.splice(index, 1);
        }

        ctrl.setTab = function(index){
            angular.forEach(ctrl.uc1Tabs, function (tab, i) {
                if(index === i){
                    tab.active = true;
                }else{
                    tab.active = false;
                }
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
