// Node Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Set heroku port
var port = process.env.PORT || 3000;

var app = express();
// Set static directory
app.use(express.static(process.cwd() + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);


app.listen(port, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port);
});