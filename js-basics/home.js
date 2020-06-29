console.log('Hello');

//alert('Yo');

/*
#You can ask the user to enter his age with the promp command and save it in a variable

let age = prompt('What is your age?');

#You can then get and element from the html page by its Id and fill the content using:

document.getElementById('some-text').innerHTML = age

*/

/* Functions
1. Create a function 
2. Call the function
*/

// Create the function

function fun() {
    console.log('This is a function')
}

//Call the function

fun();

/* let name = prompt('What is your name?');

function greet(name){
    let result = "Hello " + name;
    console.log(result);
    return result;
}

document.getElementById('some-text').innerHTML = greet(name)

*/

// For loop syntax in JavaScript
/*
for (let num=0; num <= 100; num+= 2) {
    console.log(num);
}
*/

// String methods

let fruit = 'Banana,apple,orange,cherry';

console.log(fruit.indexOf('ba'));
console.log(fruit.slice(2, 5));
console.log(fruit.replace('an', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(','));

// Arrays

let fruits = ['banana', 'apple', 'orange', 'cherry', 'strawberry'];

/* Another way to create an array
let fruits = new Array('banana','apple','orange','cherry','strawberry'); 
*/

fruits[0] = 'peach'
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array common methods

console.log('to string', fruits.toString())
console.log(fruits.join('-'))
console.log(fruits.pop(), fruits);
console.log(fruits.push('pear'), fruits);
console.log(fruits.shift()); // Removes 1st element of array and returns it
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['lettuce', 'asparagus', 'broccoli'];
let allGroceries = fruits.concat(vegetables)

console.log(allGroceries)
console.log(allGroceries.slice(1, 4)) // Slice array, including the element of index 1 but not up to element of index 4
console.log(allGroceries.reverse())

let someNumbers = ['1', '10', '3', '25', '145', '13', '75', '24', '365']
console.log(someNumbers.sort(function (a, b) { return a - b })); // Sort numbers in ascending order
console.log(someNumbers.sort(function (a, b) { return b - a })); // Sort numbers in descending order

let emptyArray = [];
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num)
}
console.log(emptyArray)

// Objects in Javascripts are dictionaries in Python

let student = {
    first: 'Otman',
    last: 'Andour',
    age: 23,
    height: 180,
    studentInfo: function () {
        return this.first + ' ' + this.last + ', ' + this.age + ' years old';
    }
};
console.log(student.first);
console.log(student['last']);
student.first = 'John';
student['last'] = 'Smith';
student.age++;
console.log(student.first);
console.log(student['last']);
console.log(student.age);
console.log(student.studentInfo());

// Conditionnals (if and else)
// && : And
// || : Or

/* let age = prompt("What is your age?")

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
} else {
    status = 'Not my audience';
}
console.log(status)
*/

// Switch Statement

/*
let day = prompt('What is today?');

switch (day) {
    case 'Saturday':
        console.log('Weekend');
        break;
    case 'Sunday':
        console.log('Weekend');
        break;
    case 'Monday':
        console.log('Weekday');
        break;
    case 'Tuesday':
        console.log('Weekday');
        break;
    case 'Wednesday':
        console.log('Weekday');
        break;
    case 'Thursday':
        console.log('Weekday');
        break;
    case 'Friday':
        console.log('Weekday');
        break;
}

*/

// Dates in JavaScript

/*
let date =  new Date("2154, 5, 18");
let somedate = new Date();
somedate.setFullYear(2100, 4, 15);
if (somedate > date){
    text = "Today is before May, 15th 2100";
} else {
    text = "Today is after May, 15th 2100";
}
document.getElementById('some-text').innerHTML = text;
*/

//Maths in Javascript


/* A function that returns a random number between min and max, both included

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(4, 25));

*/

// Regular expressions

/*let text = "Hello, my name is Otman";
console.log(text.search(/\s/g))

let obj = /e/.exec("The best things in life are free!");
console.log(obj)
*/

// JSON in Javascript

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let obj = JSON.parse(text);
document.getElementById('some-text').innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;