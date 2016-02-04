ngApp.directive('detailDirective', ['$http', '$sce', 'getDetailService', function($http, $sce, getDetailService){
    return {
        restrict: 'AE',
        controller: function($scope, $location){
            $scope.location = $location;
        },
        link: function(scope, ele, attrs, $location){
            var id = scope.location.search().id
            getDetailService.getDetail(id).success(function(data){
                scope.item = data;
                scope.item.title = $sce.trustAsHtml(scope.item[0].title);
                scope.item.detail = $sce.trustAsHtml(scope.item[0].detail);
                console.log(scope.item);
            })
        }
    }
}])