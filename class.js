//Core
//var events = require('events');
//var util = require('util');
//
var stuff = require('./stuff');


class Person{
	constructor(name){
		this.name = name;
	}

	speak(){
		console.log('My name is ' + this.name);
	}
}

var james = new Person('james');

james.speak();


// var Person = function(name){
// 	this.name = name;
// }

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var kong = new Person('kong');

// var people = [james, mary, kong];

// people.forEach(function(person){
// 	person.on('speak', function(mssg){
// 		console.log(person.name + ' said: ' + mssg);
// 	});
// });

// james.emit('speak', 'Hey fuckers');
// kong.emit('speak', 'Fuck my ass');

// console.log(stuff.counter(['Fuck','Shit','Tits']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));