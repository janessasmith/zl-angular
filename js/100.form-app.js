/**
 * Created by ZhengLu on 2015/8/11.
 */

//����formApp�����ui-router��ngAnimate
var formAppModule = angular.module('formApp', ['ngAnimate', 'ui.router']);
//����·��
formAppModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        //��ʾformҳ��
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        //��ʾform-profileҳ��
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html',
            controller: ''
        })
        //��ʾform-interestsҳ��
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html',
            controller: ''
        })
        //��ʾform-paymentҳ��
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html',
            controller: ''
        })
        //����ͷ��ظ�ҳ��
        $urlRouterProvider.otherwise('/form/profile');

});
//������
formAppModule.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
      alert('awesome!');
    };
});