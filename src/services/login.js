/**
 * Created by esc08andbott on 02/10/2016.
 */

module.exports = function (ngModule) {
    ngModule
        .service('login', ['$q', 'backend', function ($q, backend) {


            this.checkUsername = function (user) {

                console.log("chiamata SERVIZIO checkusername");

                var deferred = $q.defer();

                backend.call({
                    action: {
                        method: 'POST',
                        url: 'user/checkUsername'
                    },
                    data: user
                })
                .then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }

            this.save = function (user) {
                console.log("chiamata al SERVIZIO save in login.js");
                var deferred = $q.defer();
                backend.call({
                    action: {
                        method: 'POST',
                        url: '/user/save'
                    },
                    data: user
                })
                .then(function (result) {
                    console.log('ritorno SERVIZIO save in login.js');

                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            this.login = function (user) {

                var deferred = $q.defer();

                backend.call({
                    action: {
                        method: 'POST',
                        url: '/login'
                    },
                    data: user
                })
                .then(function (result) {
				    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        }])
};
