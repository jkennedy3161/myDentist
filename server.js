var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.write('server is connected!');
	res.end();
});

app.listen(8080);

console.log('Connected to your server');