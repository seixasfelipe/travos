/**
 * Module dependencies.
 */

var express = require('express');
var logger = require('morgan');
var app = express();

// log requests
app.use(logger('dev'));

// express on its own has no notion
// of a "file". The express.static()
// middleware checks for a file matching
// the `req.path` within the directory
// that you pass it. In this case "GET /js/app.js"
// will look for "./public/js/app.js".
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

// if you wanted to "prefix" you may use
// the mounting feature of Connect, for example
// "GET /static/js/app.js" instead of "GET /js/app.js".
// The mount-path "/static" is simply removed before
// passing control to the express.static() middleware,
// thus it serves the file correctly by ignoring "/static"
//app.use('/static', express.static(__dirname + '/public'));

// if for some reason you want to serve files from
// several directories, you can use express.static()
// multiple times! Here we're passing "./public/css",
// this will allow "GET /style.css" instead of "GET /css/style.css":
//app.use(express.static(__dirname + '/public/css'));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
