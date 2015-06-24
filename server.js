var express        = require('express');
var app            = express();
var mongoose = require('mongoose'); 					// mongoose for mongodb
var morgan = require('morgan'); 			// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var argv = require('optimist').argv;

var port = 8080; // set our port
var staticdir = argv.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev'; // get static files dir

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/' + staticdir)); // set the static files location /public/img will be /img for users

// configuration ===========================================
mongoose.connect('mongodb://' + argv.be_ip + ':80/my_database');

// models ==================================================
var models = require('./devServer/models')(mongoose); // configure our models

// routes ==================================================
require('./devServer/routes')(app, models); // configure our routes
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/' + staticdir + '/' + 'index.html');
});

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Starting sever on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app