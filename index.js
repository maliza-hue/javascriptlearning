console.log("My name is Maliza")
// Variables
//Declaring a variable uses the var, let, or const keywords

//var is function-scoped and can be redeclared and updated
var name ="Maliza";
console.log(name);
name="Anitah Martha"
console.log(name) 

//let is block-scoped and can be updated but not redeclared
let age =25;
console.log(age);
age = 23;
console.log("My age has changed",age);

//const is block-scoped and cannot be updated or redeclared
const country = "Uganda";
console.log(country);
// country = "Kenya"; // This will cause an error

// Data types
// JavaScript has several data types, including:
// 1.String
let greeting  = "Hello,How are you?";
console.log(greeting);
console.log(typeof greeting);

//2.Number
let x =10;
let y = "12";
// console.log(x);
console.log(y);
// console.log(typeof x);
console.log(typeof y);