/**
 * Created by esc08andbott on 02/10/2016.
 */

module.exports = function (ngModule) {
    
	require('./main')(ngModule);
    require('./login')(ngModule);
    require('./newUser')(ngModule);

};