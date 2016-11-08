/**
 * Created by esc08andbott on 05/11/2016.
 */

var angular = require('angular')

module.exports = function (ngModule) {

    ngModule.controller('newUserCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
        var self = this;

        this.init = function() {
            console.log('New User');
        };

        $scope.save = function() {

            var userdata = {
                firstName: 'Pippo',
                lastName: 'Baudo',
                email: 'pippo@baudo.it',
                username: 'pippo',
                password: 'baudo'
            };

            console.log('save user')

            login.save(userdata).then(function(result) {
                console.log('User saved')
            }, function (error) {
                console.log('error: ', error)
            })



        };

        this.init();
    }]);
};
