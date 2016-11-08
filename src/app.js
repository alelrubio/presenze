var angular = require('angular');

//require('node-mysql');
//require('mysql');


require('angular-ui-router');
require('angular-messages');

require('../scss/css/app.css');

var ngModule = angular.module('app', ['ui.router', 'ngMessages']);

require('./directives')(ngModule);
require('./constants')(ngModule);
require('./services')(ngModule);

require('./assets')(ngModule);

require('./router/router')(ngModule);



