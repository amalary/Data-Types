// Dynamically-typed languages such as JavaScript, Python and Ruby allows variables to be assigned different types of data during runtime

// Declare variable named data and initialize with a number
var data = 123;
// Reassigning a different type of data is allowed
data = 'Hello';

// However, statically-typed languages such as Java and C++ required a variable's type to be declared and cannot be changed:

// Declare variable as an integer and initialize
int data = 123;
// Assigning anything other than an integer raises an error
data = "Hello"; // NOT ALLOWED

// String
// A string represents textual data with zero or more characters wrapped by single or double quotation marks such as "John" or 'Jane' . A pair of quotes with nothing between them is still a string - an empty string. 

// > 'Hello World'
// < "Hello World"
// > typeof "I'm a string"
// < "string"

// A number represents a numeric value

let number = 15; 

console.log(typeof 15);

console.log(typeof 12.34);

console.log(typeof '12.34' );

// Boolean 

// Whereas strings and numbers can have a virtually unlimited number of different values, the boolean data type only has two possible values: true and false .



// The null data type has only one value: null . null is the value of a variable that explicitly has no value. It represents a lack of value. 

// A variable that has not been assigned a value is of type undefined 

let cohort; // cohort currently holds undefined

console.log('hello');

// console.log(typeof {key:1,key2:2});

console.log(typeof [1,2,3,4]);

console.log(typeof function(){});

// JavaScript is friendly and tries to help us whenever it can. However, we all know that sometimes it's better to be left alone.

13 == "13" // returns true!

// This is why, unless there's a reason not to do so, we use the strict equality operator ( === ) as it will not perform type conversion. 

// We can easily convert a number to a string using the toString() and toFixed() methods:

let n = 123.456;
let s1 = n.toString(); // "123.456" let s2 = n.toFixed(2); // "123.46"

// There are a couple of handy methods used to convert strings to numbers: parseInt() and parseFloat()

let s = "1234.567";
let n1 = parseInt(s); // 1234
let n2 = parseFloat(s); // 1234.456

