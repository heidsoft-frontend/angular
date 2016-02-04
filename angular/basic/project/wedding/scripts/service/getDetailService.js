ngApp.factory('getDetailService', ['$http', function($http){
    var getDetail = function(id){
        return $http({
            method: 'get',
            url: 'json/detailEach'+ id +'.json'
        })
    }
    return {
        getDetail: getDetail
    }
}])