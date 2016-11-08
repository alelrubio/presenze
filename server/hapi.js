'use strict';


const Hapi = require('hapi');
const mongoose = require('./configuration/mongoose');

const server = new Hapi.Server();

const db = mongoose();

server.connection({port: 8080});


require('./routes/routes')(server);



server.start((err) => {
	if(err) {
		throw err
	}
	console.log( `Server started at: ${server.info.uri} `);
});



/*
'use strict';

const Hapi = require('hapi');
const hapi = new Hapi.Server();

//var db = require('../dbconfig');

//var con = hapi.connection({ port: 8080 });


module.exports = hapi;

//uso classico

	hapi.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply('SoloStringa.html');
		}
	});

	    hapi.route({
        method: 'GET',
        path: '/start',
        handler: function (request, reply) {
			reply.file('../start.html');
        }
    });
	
	
	hapi.route({
		method: 'POST',
		path: '/login',
		handler: function (request, response) {
			console.log("sono sul SERVER");
			

			var query = 'SELECT * FROM usercredentials where username = \'' + request.payload.username + '\' and password = \'' + request.payload.password + '\'';
			
			db.query(query, function(err,rows){
				if(err) throw err;
				
				if(rows.length == 1) { //trova valore su db
					response(true);
				}
				else {
					response(false);
				}

			});
			
		}
	});

	
hapi.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
	//path file css
	hapi.route({  
		method: 'GET',
		path: '/scss/css/{file*}',
		handler: {
			directory: { 
			path: '../scss/css'
			}
		}
	})
	
	
	//path file js
	hapi.route({  
		method: 'GET',
		path: '/dist/{file*}',
		handler: {
			directory: { 
			path: '../dist'
			}
		}
	})
	

});	
	


	
	
	
	
hapi.start((err) => {
	console.log(__dirname);
    console.log(`Server running at: ${hapi.info.uri}`);
	
    if (err) {
        throw err;
    }
	
});
*/



