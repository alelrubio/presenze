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

exports.login = function(req, res, next) {

    User.find({username:req.payload.username, password:req.payload.password }, function (err, user) {
    
        if (err) {
            return next(err);
        } else {

            res(user);
        }
    })
};

exports.checkUsername = function(req, res, next) {


    User.find({username:req.payload.username}, function (err, user) {
    
        if (err) {
            return next(err);
        } else {

            res(user);
        }
    })
};