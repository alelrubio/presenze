/**
 * Created by esc08andbott on 05/11/2016.
 */

var angular = require('angular')

module.exports = function (ngModule) {

    ngModule.controller('newUserCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
        var self = this;

        this.init = function() {

            this.clearData();

        };


        this.clearData = function() {
            $scope.user.firstName = '';
            $scope.user.lastName = '';
            $scope.user.email = '';
            $scope.user.username = '';
            $scope.user.password = '';
            
        };

        $scope.goToLogin = function() {
            $scope.resetData(); //pulisco i dati nella pagina di login
            $state.go(states.login);

        };


        $scope.checkAndSave = function() {
            $scope.usernameAlredyDefined = false;

            login.checkUsername($scope.user)
                .then(function(result) {
                    
                    if (result.data == false) {
                        //se non trovo utente allora procedo al salvataggio
                        $scope.save($scope.user) 
                        
                    }
                    else {
                        //Utente già presente presente
                        $scope.usernameAlredyDefined = true;
                        $state.go(states.newUser);
                    }
                
                
                }, 
                function (error) {
                    console.log('error: ', error)
                
                })



        };


        $scope.save = function() {
            login.save($scope.user).then(function(result) {
                console.log('User saved')
                $scope.userSaved = true;
            }, function (error) {
                console.log('error: ', error)
            })

        };

        this.init();
    }]);
};
