var express = require('express');
var app = express();
var path = require('path');

// tell express to treat public folder as a static folder
app.use(express.static(path.join(__dirname, '/public')));

// Listen for requests
app.listen(8080);

console.log('Connected to your server');

app.get('/', function(req, res) {
	res.write('server is connected!');
	res.end();
});