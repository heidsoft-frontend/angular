var filterApp = angular.module('FilterApp', []);

filterApp.filter('decorate', function(){
    return function(item){
        return item += '<strong>是詹姆斯的球队</strong>';
    }
})