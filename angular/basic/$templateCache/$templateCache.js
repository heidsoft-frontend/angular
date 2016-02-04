var $templateCacheApp = angular.module('$TemplateCacheApp', []);

$templateCacheApp.run(function($templateCache, $templateRequest){
    $templateCache.put('ajax.html', '<h1>我是被加载过来的</h1>');
})

$templateCacheApp.directive('hello', function($templateCache){
    return {
        restrict: 'AECM',
        template: $templateCache.get('ajax.html'),
        replace: true
    }
})
