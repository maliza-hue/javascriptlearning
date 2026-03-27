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

//3.Boolean

//4.Null

// 5.Undefined

// 6.Symbol
// Explanation of symbol data types
// Mathematical operations
let a = 5;
let b = 3;
console.log("Addition:", a + b); // 8
console.log("Subtraction:", a - b); // 2
console.log("Multiplication:", a * b); // 15
console.log("Division:", a / b); // 1.6666666666666667
console.log("Modulus:", a % b); // 2

//conditionals
// if statement
// definition of if statement
let condition = true;
let condition1 = false;
let condition2 = true;
let condition3 = false;
if (condition) {
    // code to be executed if the condition is true
}

// example of if statement
// definition of if statement



if (condition) {
    // code to be executed if the condition is true
    
} else {
    // code to be executed if the condition is false

}

// else- if statement
// definition of else if statement
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else if(condition3){
    // code to be executed if both condition1 and condition2 are false 
} else{
    // code to be executed if all conditions are false
}

   // practice example
   let mark = 50;
    
   if (mark >69 )
      console.log("very good you have passed the exam");

   if (mark >= 70){
    console.log("You have passed the exam")
   } else {
    console.log("You have failed")
   }

//  comparision operators
//1. Equal to (==)
// Example of equal to operator
// name == maliza
//2. Not equal to (!=)
//3. Strict equal to (===)
y =5;
x = "5";

if (x == y) {
    console.log("x is equal to y");
} 
if (x === y) {
    console.log("x is strictly equal to y")
}
// strict not eqaul to (!==)
// greater than (>)
// less than (<)
// greater than or eqaul to (>=)
// less than or equal to (<=)

// Arrays
// data structure that can hold multiple values at once
["subaru","toyota","benz","mistubish"]
[1,2,3,4]
// ["Maliza",23,"Ugandan","true"]

let cars= ["subaru","toyota","benz","mistubish"]
console.log(cars);
console.log(cars[2]);

let mixedArray = ["Maliza",23,"Ugandan",true,undefined,null,{ name: "Maliza"}];
console.log(mixedArray);
console.log(mixedArray[6])

//objects
{} // empty object

let person = {
    name: "Maliza",
    age: 25,
    country: "Canada",
    isStudent: true,
    hobbies: ["coding", "eating"],

}

