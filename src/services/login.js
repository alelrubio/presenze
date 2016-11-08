/**
 * Created by esc08andbott on 02/10/2016.
 */

module.exports = function (ngModule) {
    ngModule
        .service('login', ['$q', 'backend', function ($q, backend) {

            this.save = function (user) {
                var deferred = $q.defer();
                backend.call({
                    action: {
                        method: 'POST',
                        url: '/user/save'
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

            this.login = function (user) {
				console.log("chiamata al SERVIZIO login in login.js");
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
