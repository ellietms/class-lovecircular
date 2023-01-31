"use strict";

alert("I am learning javascript :)");
alert("Hello World!");

let myRealName = "Elaheh";

let result = prompt(" what food do you like?");

console.log("cedric likes this food:", result);

alert(result);

alert(myRealName);

console.log("checking the vesrion");

// //  I am comment
// console.log("HERE YOU ARE")

/* 
 I am multi line comment 
*/

// this is alert
alert("Ellie");

// check typeof your variables
console.log(typeof myRealName);

let myFirstVariable = 1,
  secondVariable = 2,
  thirdVariable = 3;

console.log(myFirstVariable, secondVariable, thirdVariable);

console.log(myFirstVariable);
console.log(secondVariable);
console.log(thirdVariable);

// getting error (is not defined for a variable that does not exist)

let a;
console.log(a);
console.log(b);

// scope (global and local)

let myNewVariable = "This is my global variable";

function getResult() {
  let result = "local";
  console.log(myNewVariable);
  return result;
}

console.log(myNewVariable);
console.log(getResult());
console.log(result);

// difference between let and const

let myNumber = 4;

console.log(myNumber);

myNumber = 20;

console.log(myNumber);

myNumber = 1.56;

console.log(myNumber);

console.log("=============");

const mySecondNum = 2.56;

console.log(mySecondNum);

mySecondNum = 3.14;

console.log(mySecondNum);

// Data types

/*
Simple (primitive) data types: number, string, boolean, undefined, null
Composite (object) data types: object, function, array
*/

let checkDataType = null;
console.log(checkDataType);
console.log(typeof checkDataType);
console.log(result);
