//  Exercise 1: array initialization and property Access

const productCategories = ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];

// a
console.log(productCategories[0]); // Output: "Books"

// b
console.log(productCategories[productCategories.length - 1]); // Output: "Toys & Games"
// c
console.log(productCategories.length); // Output: 5

// d
productCategories[1] = "pen"
// e
console.log(productCategories); // Output: ["Books", "pen", "Clothing", "Home & Kitchen", "Toys & Games"]
//Exercise 2:  Push, pop, shift, unshift, splice
 
 let invetory = ["10", "20", "30"];
 // a
 invetory.push(40);
 console.log(invetory); // Output: ["10", "20", "30", 40];
    // b
invetory.pop();
console.log(invetory); // Output: ["10", "20", "30"]
    // c
invetory.unshift(0);
console.log(invetory);// Output: [0, "10", "20", "30"]
// d
invetory.shift();
console.log(invetory); // Output: ["10", "20", "30"]
    // e
invetory.splice(1, 1, 25, 35);
console.log(invetory); // Output: ["10", "25", "35"]

// Exercise 3: Shallow copying of Arrays  and  the reference trap
// a
const originalScores = [90, 85, 78];
// b 
// spread operator is used to create a shallow copy of the originalScores array,
//  which means that the new array will have the same elements as the original array,
//  but it will be a different array in memory.
//  This allows us to modify the new array without affecting the original array.

const referenceCopy = originalScores;
console.log(referenceCopy); // Output: [90, 85, 78]
// c
referenceCopy[0] = 100;
console.log( "original Scores:",originalScores); // Output: [100, 85, 78]
console.log("reference Copy:",referenceCopy); // Output: [100, 85, 78]
// d
const  spreadCopy = [...originalScores];
// e
spreadCopy[0] = 50;
console.log("original Scores:",originalScores); // Output: [100, 85, 78]
console.log("spread Copy:",spreadCopy);
// Section B : Searching & Checking

 // Exercise 4: Searching for Elements in an Array

const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];

// a
// The indexOf() method is used to find the first occurrence of 
// a specified element in an array and returns its index.

console.log(studentNames.indexOf("Alice")); // Output: 0
// b
console.log(studentNames.lastIndexOf("Alice")); // Output: 3
// c
console.log(studentNames.includes("Charlie")); // Output: true
// d
console.log(studentNames.includes("Eve")); // Output: false