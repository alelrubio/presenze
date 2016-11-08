/**
 * Created by esc08andbott on 01/10/2016.
 */
var angular = require('angular')

module.exports = function (ngModule) {

    ngModule.controller('loginCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
        var self = this;
        
		this.init = function() {
            $scope.user = {username:'',password:''};
            $scope.errore = false;
			$scope.labels = angular.extend({}, assetsLang.login, assetsLang.errors, lang.errors);
			$scope.invalidUsrPsw = false;
        };

        $scope.newUser = function() {
            $state.go(states.newUser);
        };

        $scope.login = function () {
		    console.log("chiamata FUNZIONE login");
            login
                .login($scope.user) //chiamata servizio
                .then(
                    function (result) {
					
						if (result.data == false) {
							$scope.invalidUsrPsw = true;		
							$state.go(states.login);
						}
						else {
							$state.go(states.inizio);
						}
                        console.log('Success!', result)
                    },
                    function (error) {
                        console.log('Error occurred', error)
                    }
                );
        };

        this.init();
    }]);
};
