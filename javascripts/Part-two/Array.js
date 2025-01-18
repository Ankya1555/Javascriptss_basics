// Array

const myArry = [ 0,1,2,3,4,5,6,7,8,9]
console.log(myArry[5]);
 
const myArrytwo = new Array(1,2,3,4,5)
console.log(myArrytwo[1]);


// array methods 

myArry.push(6)
myArry.push(7)
myArry.pop()
console.log(myArry);

// use for shift in front  in array

myArry.unshift(5) //  move 1st in 
myArry.shift() //     remove 1st in 

console.log(myArry);

console.log(myArry.includes(9));
console.log(myArry.indexOf(2));


console.log(myArry);


// new arry 
const newarry =myArry.join()
console.log(myArry);
console.log( newarry);



// slice ,plice 
console.log("a", myArry);
const myn1 = myArry.slice(1,4)
console.log(myn1);
console.log("b", myArry);

// slice plice differnce  1. slice
// Purpose: Extracts a portion of an array or string without modifying the original array or string.
// Original Data: Remains unchanged.
// Syntax: array.slice(start, end)
// Parameters:
// start: Index at which to begin extraction (inclusive).
// end: Index at which to end extraction (exclusive).
// Example:

// const fruits = ["apple", "banana", "cherry", "date"];
// const slicedFruits = fruits.slice(1, 3); // Extracts from index 1 to 3 (excluding 3)

// console.log(slicedFruits); // Output: ["banana", "cherry"]
// console.log(fruits); // Original array remains unchanged: ["apple", "banana", "cherry", "date"]
// 2. splice
// Purpose: Adds, removes, or replaces elements in an array and modifies the original array.
// Original Data: Modified after operation.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// Parameters:
// start: Index at which to start changing the array.
// deleteCount: Number of items to remove (optional).
// item1, item2, ...: Elements to add (optional).
// Example:
// javascript

// const fruits = ["apple", "banana", "cherry", "date"];
// const splicedFruits = fruits.splice(1, 2, "grape", "mango"); // Removes 2 items starting from index 1 and adds "grape" and "mango"

// console.log(splicedFruits); // Output: ["banana", "cherry"] (removed elements)
// console.log(fruits); // Original array is modified: ["apple", "grape", "mango", "date"]
// Summary of Differences:
// Feature	slice	splice
// Modifies Original	No	Yes
// Purpose	Extracts elements	Adds/removes/replaces elements
// Return Value	Extracted portion as a new array	Removed elements as a new array
// Let me know if you'd like examples or clarification! 😊