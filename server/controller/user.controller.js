/**
 * Created by esc08andbott on 05/11/2016.
 */

var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.payload);

    user.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res(user);
        }
    })
};