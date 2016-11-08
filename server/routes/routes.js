/**
 * Created by esc08andbott on 05/11/2016.
 */

var userController = require('../controller/user.controller');

module.exports = function (server) {


    server.register(require('inert'), (err) => {
        if(err) {
            throw err
        }

        server.route({
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                reply.file('./dist/start.html');
            }
        });

        server.route({
            method: 'POST',
            path: '/user/save',
            handler: userController.create
        });

        server.route({
            method: 'GET',
            path: '/bundle.app.js',
            handler: function(request, reply) {
                reply.file('./dist/bundle.app.js')
            }
        });

        server.route({
            method: 'GET',
            path: '/bundle.vendor.js',
            handler: function(request, reply) {
                reply.file('./dist/bundle.vendor.js')
            }
        });
    })
};
