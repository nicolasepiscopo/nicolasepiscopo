/**
 * Created by nde on 20/02/16.
 */
;(function(angular){
    'use strict';
    angular.module('nde')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/not-found");

            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'nde.mainController',
                    templateUrl: 'app/main/main.template.html'
                });
        });
})(window.angular);