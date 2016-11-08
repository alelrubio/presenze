/**
 * Created by esc08andbott on 05/11/2016.
 */

module.exports = function (ngModule) {
    require('./srv.backend')(ngModule);
    require('./srv.user')(ngModule);

};