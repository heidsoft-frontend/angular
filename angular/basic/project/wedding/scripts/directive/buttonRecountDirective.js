ngApp.directive('buttonRecountDirective', ['$interval', function ($interval) {
    return {
        restrict: 'AE',
        controller: function ($scope) {

        },
        link: function (scope, ele, attrs) {

            var time = 30,
                timer;
            //用$interval绑定已经解除
            ele.bind('click', function () {
                var $this = $(this);
                if (timer) {
                    $interval.cancel(timer);
                    time = 30;
                }
                timer = $interval(function () {
                    if (time == 0) {
                        $interval.cancel(timer);
                    }
                    $this.html(time + "秒后重发");
                    --time;
                }, 1000)
            })
        }
    }
}])