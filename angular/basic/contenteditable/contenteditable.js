var myApp = angular.module('app', []);
myApp.controller('TestControl', function ($scope) {
    $scope.pageParam = {
        pics:{
            isEdit: false
        },
        lowfi:{
            isEdit: false
        }
    }
    $scope.formData = {
        picsLink: '<strong style="color: lightgreen;">http://www.mydrivers.com/</strong>',
        lowfiLink: '<strong style="color: lightskyblue;">http://www.lowfi.com/</strong>'
    }
    $scope.edit = function (field) {
        $scope.pageParam[field].isEdit = !$scope.pageParam[field].isEdit;
    }
    $scope.save = function(){
        angular.forEach($scope.pageParam, function(item, key){
            item.isEdit = false;
        })
        console.log($scope.formData);
    }
})

myApp.directive('editDirective', [function () {
    return {
        require: '?ngModel',
        scope: true,
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;

            //通过持续监测变量动态判断是否添加contenteditable
            scope.$watch(function () {
                return scope.$eval(attrs.editDirective);
            }, function (newValue) {
                scope.toggleContentEditable();
            })

            //判断是否需要添加contenteditable
            scope.toggleContentEditable = function () {
                if (scope.$eval(attrs.editDirective)) {
                    attrs.$set('contenteditable', '');
                } else {
                    element.removeAttr('contenteditable');
                }
            }

            //绑定事件
            element.bind('blur keyup change', function () {
                read();
            });

            function read() {
                ngModel.$setViewValue(element.html());
            }

            //实际作用只是在第一次进行初始化而已，如果不放在$render中运行ngModel.$viewValue的值为NaN
            ngModel.$render = function () {
                element.html(ngModel.$viewValue);
            };

            scope.toggleContentEditable();
        }
    }
}])