var fs = require('fs');

//Synchronous
//var readMe = fs.readFileSync('readMe.txt', 'utf-8');
//fs.writeFileSync('writeMe.txt', readMe);

var readMe = fs.readFile('readMe.txt', 'utf-8', function(err, data){
	fs.writeFile('writeMe.txt', data);
});