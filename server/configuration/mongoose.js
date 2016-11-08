/**
 * Created by esc08andbott on 05/11/2016.
 */

var config = require('./config');
var mongoose = require('mongoose');

module.exports = () => {
    var db = mongoose.connect(config.db);

    require('../model/user.model');

    return db;
}