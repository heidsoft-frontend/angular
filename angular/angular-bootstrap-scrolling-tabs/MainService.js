/**
 * FileName MainService
 * Date 2016-07-11
 * Created by jianglinj
 */
;(function () {
    'use strict';

    var uc1Tabs = [
        { 
            paneId: 'uc1tab01', 
            title: 'Tab <strong>1</strong> of 12', 
            content: '<input type="text">', 
            active: true, 
            disabled: false 
        },

        {
            paneId: 'uc1tab02',
            title: 'Tab <strong>222</strong> of 12',
            content: '<input type="text">',
            active: false,
            disabled: false
        }
    ];

    var uc2Tabs = [
        { paneId: 'uc2tab01', title: 'Tab 1 of 12', content: 'Tab Number 1 Content', active: true, disabled: false },
        { paneId: 'uc2tab02', title: 'Tab 2 of 12', content: 'Tab Number 2 Content', active: false, disabled: false },
        { paneId: 'uc2tab03', title: 'Tab 3 of 12', content: 'Tab Number 3 Content', active: false, disabled: false },
        { paneId: 'uc2tab04', title: 'Tab 4 of 12', content: 'Tab Number 4 Content', active: false, disabled: false },
        { paneId: 'uc2tab05', title: 'Tab 5 of 12', content: 'Tab Number 5 Content', active: false, disabled: true },
        { paneId: 'uc2tab06', title: 'Tab 6 of 12', content: 'Tab Number 6 Content', active: false, disabled: false },
        { paneId: 'uc2tab07', title: 'Tab 7 of 12', content: 'Tab Number 7 Content', active: false, disabled: false },
        { paneId: 'uc2tab08', title: 'Tab 8 of 12', content: 'Tab Number 8 Content', active: false, disabled: false },
        { paneId: 'uc2tab09', title: 'Tab 9 of 12', content: 'Tab Number 9 Content', active: false, disabled: false },
        { paneId: 'uc2tab10', title: 'Tab 10 of 12', content: 'Tab Number 10 Content', active: false, disabled: false },
        { paneId: 'uc2tab11', title: 'Tab 11 of 12', content: 'Tab Number 11 Content', active: false, disabled: false },
        { paneId: 'uc2tab12', title: 'Tab 12 of 12', content: 'Tab Number 12 Content', active: false, disabled: false }
    ];

    var uc3Pills = [
        { paneId: 'uc3pill01', title: 'Pill 1 of 12', content: 'Pill Number 1 Content', active: true, disabled: false },
        { paneId: 'uc3pill02', title: 'Pill 2 of 12', content: 'Pill Number 2 Content', active: false, disabled: false },
        { paneId: 'uc3pill03', title: 'Pill 3 of 12', content: 'Pill Number 3 Content', active: false, disabled: false },
        { paneId: 'uc3pill04', title: 'Pill 4 of 12', content: 'Pill Number 4 Content', active: false, disabled: false },
        { paneId: 'uc3pill05', title: 'Pill 5 of 12', content: 'Pill Number 5 Content', active: false, disabled: true },
        { paneId: 'uc3pill06', title: 'Pill 6 of 12', content: 'Pill Number 6 Content', active: false, disabled: false },
        { paneId: 'uc3pill07', title: 'Pill 7 of 12', content: 'Pill Number 7 Content', active: false, disabled: false },
        { paneId: 'uc3pill08', title: 'Pill 8 of 12', content: 'Pill Number 8 Content', active: false, disabled: false },
        { paneId: 'uc3pill09', title: 'Pill 9 of 12', content: 'Pill Number 9 Content', active: false, disabled: false },
        { paneId: 'uc3pill10', title: 'Pill 10 of 12', content: 'Pill Number 10 Content', active: false, disabled: false },
        { paneId: 'uc3pill11', title: 'Pill 11 of 12', content: 'Pill Number 11 Content', active: false, disabled: false },
        { paneId: 'uc3pill12', title: 'Pill 12 of 12', content: 'Pill Number 12 Content', active: false, disabled: false }
    ];


    function MainService($timeout) {
        var svc = this;

        svc.data = {
            uc1Tabs: uc1Tabs,
            uc2Tabs: uc2Tabs,
            uc3Pills: uc3Pills
        };
    }

    MainService.$inject = ['$timeout'];

    angular.module('myapp').service('MainService', MainService);
}());
