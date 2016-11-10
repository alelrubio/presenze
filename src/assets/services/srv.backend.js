/**
 * Created by esc08andbott on 06/10/2016.
 */

module.exports = function (ngModule) {
    ngModule.service('backend', function ($http, $q) {
        return {

            //{action: {restCommand, method}, data}
            call: function (callParams) {
                if(!callParams) {
                    console.error('call without parameters');
                    return
                };

/*
console.log("method: " + callParams.action.method);
console.log("url: " + callParams.action.url);
console.log("data: " + callParams.data);
*/
                    console.log('call BACKEND');
                const deferred = $q.defer();
                $http({
                    method: callParams.action.method,
                    url: callParams.action.url,
                    data: callParams.data
                }).then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    })
};

