/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule.constant('states', {
        main: 'main',
        login: 'main.login',
        newUser: 'main.login.newUser',
        home:  'main.home',
		inizio:	'main.inizio'
    });


    ngModule.config(['$stateProvider', '$urlRouterProvider', 'states', function($stateProvider, $urlRouterProvider, states){
        $stateProvider
            .state(states.main, {
                name: states.main,
                template: require('../directives/main.html'),
				controller: 'mainCtrl'
            })
            .state(states.login, {
                name: states.login,
                template: require('../directives/login.html'),
                controller: 'loginCtrl'
            })
            .state(states.newUser, {
                name: states.newUser,
                template: require('../directives/newUser.html'),
                controller: 'newUserCtrl'
            })
            
            .state(states.inizio, {
                name: states.inizio,
                template: require('../directives/inizio.html'),
				controller: 'inizioCtrl'
            })
            
    }]);

    ngModule.directive('appRouter', ['$state', 'states', function ($state, states) {
        return {
            restrict: 'E',
            scope: {},
            template: '<ui-view></ui-view>',
            link: function () {$state.go(states.main);}
        }
    }])
};