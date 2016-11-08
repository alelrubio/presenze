/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {
    require('./constants/assets.lang')(ngModule);

    require('./services')(ngModule);

    require('./directives/field.validators')(ngModule);

};
