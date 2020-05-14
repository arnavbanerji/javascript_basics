//comment
console.log('Hello World');
let name = 'Arnav';
console.log(name);
const interestRate = 0.3;
console.log(interestRate);

let a = 'Arnav'; //string literal
let b = 30; //number literal (integer and float as in java)
let isApproved = false; //boolean literal
let nullVar = undefined;
let nullVar2 = null;

//JS is dynamic language - we can change data type of variable
let someName = 'Arnav'
console.log(typeof someName); //string
someName = 1;
console.log(typeof someName); //number

//objects
let nameInObject = 'Arnav';
let ageInObject = 30;
let person = {
	name: 'Mosh',
	age: 30
};
console.log(person);
//Dot notation
person.nameInObject = 'John';
console.log(person);
//Bracket notation
person['nameInObject'] = 'Mary';
console.log(person);
//Dot notation is better preferred

//Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]); //red
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[3] = 1;
console.log(selectedColors); // Array in JS is dynamic (we can change its size and we can change datatype of its element)
console.log(selectedColors.length); //4

//functions
function greet(name,lastName) {
	console.log('hello '+name+' '+lastName);
}
greet(name,'Banerji');

function square(number) {
	return number * number;
}
console.log(square(2));




