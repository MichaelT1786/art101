// index.js - JavaScript for lab 8 page (Anonymous funcitons and Callbacks)
// Author: Michael Thomas
// Date: 10/31/24

// Constants

// Functions

addFooter("../../index.html");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
let array = [1, 2, 3, 4, 569];
console.log("array: " + array);
/* arrayMath: does some simple math to the input value*/
function arrayMath(num) {
    // multiplies input value by 42, then subtracts 16
    let results = (num*42)-16;
    return results;
}

console.log("arrayMath: " + array.map(arrayMath));



console.log("final results: " + 
  //does some even simpler math to array
  array.map(function(x){
    //divides the input item of array by 2
    let results = x/2;
    return results;
}));
