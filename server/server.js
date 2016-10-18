var express = require('express');
var app = express(); 

var port = process.env.PORT || 8080;        // set our port

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// Listen for requests
app.listen(port);

console.log('Connected to your server');

app.get('/dentists', function(req, res) {
	res.render(req.body);
});

