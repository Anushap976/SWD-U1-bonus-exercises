/**********************************/
/****** OBJECTS WITH METHODS ******/
/**********************************/

/*
	Objects can have properties that store variables or other arrays/objects with variables... but they also can have properties that store functions. We call these "methods." You already know how to use methods like String methods and Array methods!

	But here we are going to focus on custom objects you can create with methods of their own.
*/


/**** THREE DIFFERENT WAYS TO STORE METHODS IN AN OBJECT */

/*
	There are three different ways to store functions in an object. Note that all three of the objects below share the same property names (keys).
*/

// Option 1: Reference an external named function
function addTwo(a, b) {
    return a + b;
}
let add = {
    name: "Addition",
    type: "Arithmetic",
    doTheMath: addTwo // reference, not a call, so no ()
};

// Option 2: Reference an external anonymous function stored in a variable
let subtractTwo = function(a, b) {
    return a - b;
}
let subtract = {
    name: "Subtraction",
    type: "Arithmetic",
    doTheMath: subtractTwo // reference, not a call, so no ()
};

// Option 3: put an anonymous function directly inside the object
let multiply = {
    name: "Multiplication",
    type: "Arithmetic",
    doTheMath: function(a, b) {
        return a * b;
    }
};

// Let's set some values to use as arguments when we call each method below.
let num1 = 4;
let num2 = 3;

// EXAMPLE: Call the addTwo function by referencing the add object, not the original function itself, and print the result.
console.log(add.doTheMath(num1, num2));

// TODO: Call the subtractTwo function by referencing the subtract object and print the result.
console.log(subtract.doTheMath(num1, num2));

// TODO: Call the anonymous multiplication method in the multiple object and print the result.
console.log(multiply.doTheMath(num1, num2));

// TODO: Reference the object and its property key and call all three methods with new numbers passed directly as arguments for the 
// parameters a and b. Choose whatever numbers you want.
console.log(add['doTheMath'](5,1));
console.log(subtract['doTheMath'](9,4));
console.log(multiply['doTheMath'](7,9));

/**** WRITING YOUR OWN METHODS ****/

/*
	For the three objects below, add a property called describeCandy and store a function that prints a sentence describing
	 what it's like to enjoy that piece of candy (be creative as you want). Each function should be written a different way 
	 (so you can practice the three methods shown above). You don't need to return any values in your functions since they just print
	  something to the console when you call them.

	Tip: don't forget that object properties must be separated by commas.
*/

// TODO: write a function for the peanutMMs description

//external named function
function describePeanutMMs() {
	console.log(`Enjoying ${peanutMMs.name}: Crunchy peanuts coated in colorful candy shell.`);
  }

let peanutMMs = {
	name: "Peanut M&Ms",
	type: "chocolate",
	slogan: "Melts in your mouth, not in your hand",
	// TODO: add describeCandy property (method) referencing your external named function
	describeCandy: describePeanutMMs  //method for external named function
};

// TODO: write a function for the skittles description


let skittles = {
	name: "Skittles",
	type: "fruit-flavored",
	slogan: "Taste the rainbow",
	// TODO: add describeCandy property (method) referencing your external function that is stored in a variable
	describeCandy: function() {  //Method: Anonymous function
		console.log(`Bursting with ${skittles.type} flavors, ${skittles.name} let you "${skittles.slogan}" with every colorful piece!`);
	  }
};

let werthers = {
	name: "Werther's Original",
	type: "caramel",
	slogan: "A little piece of bliss",
	// TODO: add describeCandy property (method) as an anonymous function here inside the object... and while you're at it, mention the name and type of the candy in your sentence by referencing those properties within the object! (Hint: remember that inside an object you use "this" instead of the object name to reference its own properties.)
	describeCandy: function() {  // Method: Anonymous function
		console.log(`Smooth ${werthers.type} ${werthers.name} deliver "${werthers.slogan}" in every golden, buttery bite.`);
	}
};

// TODO: Put all three objects in an array. Loop through to run the function for each object.
const candies = [peanutMMs, skittles, werthers];
candies.forEach(candy => candy.describeCandy());

/* 
	To sum up, the major advantage of writing an anonymous function inside the object directly is that you can access other properties of the object easily without having to pass anything in through a parameter.
*/
