// server.js

// set up
var express = require('express');
var app = express();
var port = process.env.PORT || 2001;

// express modules
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// express config
app.use(express.static(path.join(__dirname, '/public')));     // static files location (e.g. /public/img will be /img for users)
app.use(bodyParser.json());                                   // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({                               // to support URL-encoded bodies
  extended: true
}));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));

// routing
require('./app/routes.js')(app);

app.listen(port);
console.log("APP LISTENING: PORT " + port);
