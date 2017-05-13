var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);

	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
	}
	else if( req.url === '/contact' ){
		res.writeHead(200, {'Content-Type': 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
	}
	else if( req.url === '/api'){
		var data = [{ name: 'bob', age: 29 }, {name: 'yoshi', age: 32}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(data));
	}
	else{
		res.writeHead(404, {'Content-Type': 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
	}
	
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');