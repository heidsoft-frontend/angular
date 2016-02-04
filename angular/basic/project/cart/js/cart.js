var cartModule = angular.module('CartModule', []);

cartModule.controller('cartController', ['$scope', function ($scope) {
    $scope.proInfo = [{
        src: "1.jpg",
        proName: "这是第一个小猪，当前正在热销中",
        proPrice: 100.1245,
        Num: 2
    },
    {
        src: "2.jpg",
        proName: "这是第一个小猪，当前正在热销中",
        proPrice: 100,
        Num: 6
    },
    {
        src: "3.jpg",
        proName: "这是第一个小猪，当前正在热销中",
        proPrice: 100,
        Num: 5
    },
    {
        src: "4.jpg",
        proName: "这是第一个小猪，当前正在热销中",
        proPrice: 100,
        Num: 5
    }];

    $scope.totalCart = function(){
        var price = 0;
        for(var i= 0; i< $scope.proInfo.length; i++){
            var item = $scope.proInfo[i];
            price += item.Num * item.proPrice;
        }
        return price;
    }

    $scope.totalNum = function(){
        var num = 0;
        for(var i= 0; i< $scope.proInfo.length; i++){
            var item = $scope.proInfo[i];
            num += parseInt(item.Num);
        }
        return num;
    }

    //购买数量加一
    $scope.addnum = function (i) {
        var num = $scope.proInfo[i].Num;
        $scope.proInfo[i].Num = ++num > 100000 ? 100000 : num;
    }

    //购买数量减一
    $scope.subnum = function (i) {
        var num = $scope.proInfo[i].Num;
        $scope.proInfo[i].Num = --num < 1 ? 1 : num;
    }

    $scope.delnum = function(i){
        $scope.proInfo.splice(i, 1);
    }

    $scope.addPro = function (n) {

        //获取一个n到m的随机数： var c = m - n + 1; Math.floor(Math.random() * c + n);
        var random = Math.floor(Math.random() * 4 + 1);
        var item = {
            src: random+".jpg",
            proName: "这是第一个小猪，当前正在热销中",
            proPrice: 100.12345,
            Num: 1
        };
        $scope.proInfo.splice(0, 0, item);
    }

    //判断购买的输入框输入的是否是数字
    $scope.numCheck = function ($event, n) {
        if (! /^\d+$/.test($scope.proInfo[n].Num)) {
            $scope.proInfo[n].Num = 1;
        }
    }
}])