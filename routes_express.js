//node routes_express

var express = require('express');
var mustacheExpress = require('mustache-express');
var testController = require('./controllers/testController');

var app = express();

app.engine('mustache', mustacheExpress(__dirname + '/views/partials'));
app.set('view engine', 'mustache');
//Serve static files
app.use('/assets', express.static('assets'));

testController(app);

app.listen(3000);