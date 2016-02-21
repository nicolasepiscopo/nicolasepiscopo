/**
 * Created by nde on 20/02/16.
 */
;(function(angular){
    'use strict';
    angular.module('nde')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'app/main/main.template.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/about/about.template.html'
                })
                .state('skills', {
                    url: '/skills',
                    templateUrl: 'app/skills/skills.template.html'
                });
        });
})(window.angular);