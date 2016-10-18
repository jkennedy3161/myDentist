var bodyParser = require('body-parser');

module.exports = function (app, express) {
  // use bodyParser to handle form requests and turn them into json objects
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // tell express to treat public folder as a static folder
  app.use(express.static(__dirname + '/../../public'));
};

// Logging and Parsing are useful with middleware