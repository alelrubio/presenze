/**
 * Created by esc08andbott on 05/11/2016.
 */

var angular = require('angular')

module.exports = function (ngModule) {

    ngModule.controller('newUserCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
        var self = this;

        this.init = function() {

            this.resetData();

            console.log('New User');
        };


        this.resetData = function() {
            $scope.user.firstName = '';
            $scope.user.lastName = '';
            $scope.user.email = '';
            $scope.user.username = '';
            $scope.user.password = '';
            
            //if($scope.formLogin != null)
              //$scope.formLogin.$setUntouched();
        };

        $scope.goToLogin = function() {
            //$scope.formLogin.$setUntouched();
            //self.init();
            //$scope.showLogin = true;
            //$scope.changeShowLogin(true);
            $scope.resetData();
            $state.go(states.login);


        };


        $scope.save = function() {

/*
            var userdata = {
                firstName: 'Pippetto',
                lastName: 'Baudo',
                email: 'pippo@baudo.it',
                username: 'pippo',
                password: 'Pippetto20'
            };
*/

            console.log('save user');


            login.save($scope.user).then(function(result) {
                console.log('User saved')
            }, function (error) {
                console.log('error: ', error)
            })



        };

        this.init();
    }]);
};
