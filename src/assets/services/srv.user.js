/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {
    ngModule.service('user', function () {
        return {
            userData: {
                username: '',
                privileges:[]
            }
        }
    })
};

