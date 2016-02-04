ngApp.factory('getListService', ['$http', function($http){
    var getList = function(){
        return $http({
            method: 'get',
            url: 'json/listEach.json'
        })
    }
    return {
        getList: getList
    }
}])