var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;        // set our port

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public')); 

// Listen for requests
app.listen(port);

console.log('Connected to your server');

