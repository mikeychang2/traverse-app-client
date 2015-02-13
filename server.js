
//initialize app
var express   = require('express');
var path      = require('path');
var morgan    = require("morgan");
var mongoose  = require("mongoose");
var app       = express();
// var routes    = require('./routes')(app);

// all environments

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 9000;
app.use(morgan('dev'));
app.use(express.static(__dirname + '/app'));
app.listen(port);
console.log('Node express server running on port ' + port);


