/**
 * FileName tab1.controller
 * Date 2016-07-11
 * Created by jianglinj
 */
;(function () {
    'use strict';

    function Tab1Controller() {
        var ctrl = this;

        $scope.datas = [
            {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10},
            {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10},
            {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10}
        ]
    }

    Tab1Controller.$inject = [];

    angular.module('myapp').controller('Tab1Controller', Tab1Controller);

}());