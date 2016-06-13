/**
 * Created by William on 2016/6/10.
 */
'use strict';

// Declare app level module which depends on views, and components
var featurePortal = angular.module('athFeaturePortal', ['ui.router']);

featurePortal.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('new_feature', {
            url: '/new_feature',
            templateUrl: 'new_request.html',
            controller: ''
        })
        .state('request', {
            url: "/request",
            templateUrl: 'request_list.html',
            controller: ''
        });
}]);