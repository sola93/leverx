"use strict";
var express = require('express');
var path    = require("path");
var http    = require('http');
var cors = require('cors');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var settings  = require('./settings.json');

var app     = express();
var bodyParser = require('body-parser')
var request = require('request');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors())
app.options('*', cors())

app.use(express.static('src/static'));
app.set('views', 'src/views');

var port = settings.PORT;
var start_date = settings.START_DATE;
var end_date = settings.END_DATE;
var API_KEY = settings.API_KEY;

app.listen(port, function() {
    console.log('App is running on port', port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/list', function (req, res) {
  request.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`,
    function (error, response, body) {
      res.status(200).send(body);
    }
  );
});



