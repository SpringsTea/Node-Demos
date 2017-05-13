//node routes_express

var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();

app.engine('mustache', mustacheExpress(__dirname + '/views/partials'));
app.set('view engine', 'mustache');

app.get('/', function(req, res){
	res.render('home');
});

app.get('/contact', function(req, res){
	res.send('This is the contact page');
});

app.get('/profile/:name', function(req, res){

	var params = req.params;

	var view = {
		username: params.name,
		'hobbies': ['hiking', 'biking', 'triking']
	};
	res.render('profile', view)
});

app.listen(3000);