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
function grade (score) {
if (score >= 80) {
    return 'A'
} else if (score >= 70) {
    return 'B'
} else if(score >= 60){
    return 'C'
} else if (score >= 50) {
    return 'D'
} else {
    return 'F'
}
}
console.log(grade(65));

let scores=[
    {name: "Annet", score: 85},
    {name: "Martha", score: 63},
    {name: "Maliza", score: 75},
    {name: "John", score: 57},
    {name: "Jane", score: 39},
    {name: "Annet", grade: 95}

];

scores.forEach(student => {
    let grade;
    if ( student.score >= 90) {
        grade = 'A'
    } else if (student.score >=80) {
        grade = 'B'
    } else if (student.score >= 70) {
        grade = "C"
    } else if (student.score >= 60) {
        grade = 'D'
    } else if (student.score >= 50) {
        grade = 'E'
    } else {
        grade ='F'
    }


console.log(student.name +": " + student.score + " and received grade " + grade)
})

// functions
//reusable blocks of code that perform a specific task. they can take parameters and return values

// function declaration // we use the function keyword to declare a 

function functionName (){
    // code to be executed
}

function funcName (parameter) {
    // code to be executed
    return parameter; // this is the value that will be returned when the function is called
}

function funcWithParameters(param1, param2) {}

// working example of a function
function returnSomeValue () {
    let value = "This is my first function in JavaScript";

    console.log(value);
}
returnSomeValue ();// This will call the function and execute the code inside it

function returnParameter(parameter) {
    return parameter;
}

// console.log (returnParameter("Hello, this is my second function in Javascript"));
const result = returnParameter("Hello, this is my second function in Javascript");
console.log(result)

function addNumbers(x,y) {
    return x+y;
}
const sum = addNumbers(4+5);
console.log(sum)

// loops
//1. for loop

for (let i = 0; i < 7; i++) {
    console.log(i)
}
// deccreamenting for loop
for( let i =7; i>0; i--){
    console.log(i)
}

const myCars = ["volvo","benz","kia","toyota"]
console.log(myCars)
 const numberofCars =myCars.length;//this gives you the number of items
 console.log(numberofCars);

 for (let i = 0; i < myCars.length; i++){
    console.log(myCars[i]);
 }

 for(let car of myCars){
    console.log(car);
 }

 for(let car of myCars){
    function printCarPosition(car){
        const index = myCars.indexOf(car);
        console.log("The position of " + car + " in the array is " +  index );

    }
    printCarPosition(car);
    console.log(car);

 }
 //2. while loop
//  while (condition) {
//     // code to be executed as long as the condition is true
//  }
// example of an incrementing while loop
 let id = 0;
 while (id < 7) {
    console.log("From the while loop" ,id);
    id++;
 }
//example of a decrementing while loop
let id2 = 7;
while (id2 > 0) {
    console.log("From the while loop",id2);
    id2--;
} 

let password = "";

while (password !=="1234") {
    password = prompt("please enter password");
}
// 3. do-while loop
// do {
    // code to be executed
    //}  while (condition);

    let i = 0;
    do{
        console.log("From the do-while loop", i);
        i++;
    } while (i<7);
