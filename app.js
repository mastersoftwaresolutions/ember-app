var express = require('express');
var path = require('path');
var connect = require('connect');
var http = require('http');

var mongoose = require('mongoose');

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes   = require('./backend/routes')

var app = express();

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/ember_node');

app.set('port', process.env.PORT || 8081);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser({limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'frontend')));


app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

require('./backend/routes')(app);