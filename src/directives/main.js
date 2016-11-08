/**
 * Created by esc08andbott on 01/10/2016.
 */

var angular = require('angular')
 
module.exports = function (ngModule) {

    ngModule.controller('mainCtrl', ['$scope', 'user', 'states', '$state', function ($scope, user, states, $state) {

        var self = this;
		
        this.init = function() {

			if (user.userData.username === '') {
                $state.go(states.login);
            }
        };

        self.init();
    }]);
};

