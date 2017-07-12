// write a function that takes in three parameters and returns the sum of those three parameters

function hi(a, b, c){
	return a+b+c;
}

console.log(hi(3,4,5));



// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function beep(boop){
	return boop.charAt(boop.length-1);
}

console.log(beep("sam"));



// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube(x){
 	return x*x*x;
}

console.log(cube(3));



// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

// var yellow = ["koala", "bear", "lion", "elephant"]; //OWN NOTES

function squiggle(array){

	var newWord= ""

	for (var x = array.length - 1; x >= 0; x--) {
		
	var newWord= newWord + array[x];
	

	}
	console.log(newWord);

}

//array[5] = e
//array[4] = l
//array[3] = g
//array[2] = g
//array[1] = i
//array[0] = w
// array[5]+ array[4]+array[3]+array[2]+array[1]+array[0] = elggiw

squiggle("wiggle");



// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

function yellow(bear, koala){
	object = {};
	for(var x = 0; x < bear.length; x++){
		object[bear[x]] = koala[x];
	}
	console.log(object);
}


yellow(["fluffy", "pink"], ["yes", "no"]);


// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }


var object1 = {exotic: "flowers", traditional: "clogs"}
// var object2 = { exciting: "markets", abroad: "britain" }

	function green(randomObject){
 	 	var keys = Object.keys(randomObject)
  		var values = [];
  			for(key in randomObject){
  				if(randomObject.hasOwnProperty(key)){
  					values.push(randomObject[key]);
  		}
  	}

	    var newObject = {};
		newObject["keys"] = keys;
		newObject["values"] = values;
		console.log(newObject);
  }

green(object1);
// green(object2);



// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.


