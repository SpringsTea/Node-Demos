var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // use native mongoose promises﻿

//conntect to database
mongoose.connect( 'mongodb://test:test@ds143221.mlab.com:43221/springstea_test' );

var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'get milk'}).save(function(err){
// 	if(err) throw err;
// 	console.log('item saved');
// });

module.exports = function(app){

app.get('/', function(req, res){
	res.render('home');
});

app.get('/contact', function(req, res){
	var view = {
		person: req.query.person
	};
	console.log(view);
	res.render('contact', view);
});

app.get('/profile/:name', function(req, res){

	var params = req.params;

	var view = {
		username: params.name,
		'hobbies': ['hiking', 'biking', 'triking']
	};
	res.render('profile', view)
});

//Get data from a database
app.get('/data', function(req, res){

	Todo.find({}, function(err, data){
		if (err) throw err;
		view = {
			todos: data
		};

		res.render('data', view);
	});
});

};