var counter = function(arr){
	return 'There area ' + arr.length + ' lights';
};

var adder = function(a,b){
	return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};