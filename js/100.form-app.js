/**
 * Created by ZhengLu on 2015/8/11.
 */

//创建formApp并添加ui-router和ngAnimate
var formAppModule = angular.module('formApp', ['ngAnimate', 'ui.router']);
//配置路径
formAppModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        //显示form页面
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        //显示form-profile页面
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html',
            controller: ''
        })
        //显示form-interests页面
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html',
            controller: ''
        })
        //显示form-payment页面
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html',
            controller: ''
        })
        //错误就返回该页面
        $urlRouterProvider.otherwise('/form/profile');

});
//控制器
formAppModule.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
      alert('awesome!');
    };
});