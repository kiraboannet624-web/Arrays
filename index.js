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

//Exercise 5: Advenced  searching with find() and findIndex()
 const products = [
   {id: 1, name: "Laptop", price: 999},
   {id: 2, name: "Smartphone", price: 499}, 
   {id: 3, name: "Tablet", price: 299}, 
   {id: 4, name: "Headphones", price: 1999}
    ];
    // a
    let foundProducts = products.find(product => product.id === 2);
    console.log(foundProducts); // Output: {id: 2, name: "Smartphone", price: 499}
    // b
    let foundIndex = products.findIndex(product => product.price > 1000);
    console.log(foundIndex); // Output: -1 (no product has price > 1000)
      //Exercise 6: chacking arry integrity with every() and some()

  const userAges = [18, 24, 33, 16, 40];
  //a

  console.log(userAges.some(age => age < 18)); // Output: true
  
  // b
  console.log(userAges.every(age => age >= 18)); // Output: false
  
  // c

  console.log(userAges.some(age => age % 5 === 0)); // Output: 

// Section C: Transformation & Reordering
//Exercise 7: Sorting and Reversing

 let dataPoints = [42, 10, 500, 2, 77];

// a

let ascendingSort = [...dataPoints].sort((a, b) => a - b);
console.log("Ascending order:", ascendingSort); // Output: [2, 10, 42, 77, 500]

// b

let descendingSort = [...dataPoints].sort((a, b) => b - a);
console.log("Descending order:", descendingSort);

// c

let reversedDataPoints = [...dataPoints].reverse();
console.log("Reversed original array:", reversedDataPoints); // Output: [77, 2, 500, 10, 42]
// Exercise 8: Concatenation, Joining, and Slicing

 let arr1 = ["A", "B"], arr2 = ["C", "D"], 

 sentenceParts = ["Hello", "world", "this", "is", "great"]
// a
let combinedArray = arr1.concat(arr2);
console.log("Concatenated array:", combinedArray); // Output: ["A", "B", "C", "D"]

// b
let sentence = sentenceParts.join(" ");
console.log("Joined sentence:", sentence); // Output: "Hello world this is great"

// c
let middleThree = sentenceParts.slice(1, 4);
console.log("Middle three elements:", middleThree); // Output: ["world", "this", "is"]
// Exercise 9: Flattening Arrays (flat)

const nestedList = [1, [2, 3], [4, [5, 6]], 7];

// a
let flattenedOnce = nestedList.flat();
console.log("Flattened once:", flattenedOnce); // Output: [1, 2, 3, 4, [5, 6], 7]

// b
let completelyFlattened = nestedList.flat(Infinity);
console.log("Completely flattened:", completelyFlattened); // Output: [1, 2, 3, 4, 5, 6, 7]
//Section D: Functional Programming (Higher-Order Methods)
// Exercise 10: Mapping Data (map)

const pricesUSD = [10.50, 20.00, 5.25];
const exchangeRate = 1.3;

// a
let localCurrencyPrices = pricesUSD.map(price => price * exchangeRate);
console.log("Local currency prices:", localCurrencyPrices); // Output: [13.65, 26, 6.825]
// b
const formattedPrices = localCurrencyPrices.map(price =>
  `Item price: $${price.toFixed(2)}`
);

console.log(formattedPrices);

//  Exercise 11: Filtering Data (filter)

const testScores = [45, 78, 92, 30, 65, 88];

// a
let passingScores = testScores.filter(score => score >= 70);
console.log("Passing scores:", passingScores); // Output: [78, 92, 88]

// b
let average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
let belowAverage = testScores.filter(score => score < average);
console.log("Average:", average); // Output: 66.33...
console.log("Below average scores:", belowAverage); // Output: [45, 30, 65]

// Exercise 12: Aggregating Data (reduce)

// a
let totalCost = pricesUSD.reduce((sum, price) => sum + price, 0);
console.log("Total cost:", totalCost); // Output: 35.75

// b
let maxPrice = pricesUSD.reduce((max, price) => price > max ? price : max);
console.log("Maximum price:", maxPrice); // Output: 20.00

// c
let countGreaterThan15 = pricesUSD.reduce((count, price) => price > 15 ? count + 1 : count, 0);
console.log("Prices greater than $15:", countGreaterThan15); // Output: 1

// Section E: Objects Inside Arrays (Real-World Data Structures)
//Exercise 13: Sorting Objects

 const users = [{name: "Zoe", age: 30},
         {name: "Adam", age: 25}, 
         {name: "Charlie", age: 30}];
// a
let sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortedByAge); // Output: [{name: "Adam", age: 25}, {name: "Zoe", age: 30}, {name: "Charlie", age: 30}]

// b
let sortedByAgeAndName = [...users].sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log("Sorted by age then name:", sortedByAgeAndName); // Output: [{name: "Adam", age: 25}, {name: "Charlie", age: 30}, {name: "Zoe", age: 30}]

// Exercise 14: Mapping and Filtering Objects
// a
let userNames = users.map(user => user.name);
console.log("User names:", userNames); // Output: ["Zoe", "Adam", "Charlie"]

// b
let usersOlderThan28 = users.filter(user => user.age > 28);
console.log("Users older than 28:", usersOlderThan28); // Output: [{name: "Zoe", age: 30}, {name: "Charlie", age: 30}]

// Section F: Multi-Dimensional Arrays (Matrices)
// Exercise 15: Creating and Accessing a Matrix

// a
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
console.log("Initial game board:", gameBoard);

// b
gameBoard[1][1] = 1;
console.log("After setting center to 1:", gameBoard);

// c
console.log("Top-right corner value:", gameBoard[0][2]); // Output: 0

// Exercise 16: Looping Through a Matrix

// a





// b
let sum = 0;
for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    sum += gameBoard[i][j];
  }
}
console.log("Sum of all elements:", sum); // Output: 1

// Section G: Mini Projects
// Project 1: Student Result System

const students = [{name: "A", score: 85}, {name: "B", score: 45}, {name: "C", score: 92}, {name: "D", score: 68}];

// a - Filter Passed
let passedStudents = students.filter(student => student.score >= 70);
console.log("Passed students:", passedStudents); // Output: [{name: "A", score: 85}, {name: "C", score: 92}]

// b - Average Score
let averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
console.log("Average score:", averageScore); // Output: 72.5

// c - Top Scorer
let topScorer = students.reduce((highest, student) => student.score > highest.score ? student : highest);
console.log("Top scorer:", topScorer); // Output: {name: "C", score: 92}

// Project 2: Shopping Cart Management

const cart = [{id: 1, name: "Shirt", price: 20, quantity: 2}, {id: 2, name: "Pants", price: 50, quantity: 1}];

// a - Calculate Total Cost
let cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log("Total cost:", cartTotal); // Output: 90

// b - Modify Quantity
let updatedCart = cart.map(item => item.id === 1 ? {...item, quantity: 3} : item);
console.log("After updating Shirt quantity:", updatedCart); // Output: [{id: 1, name: "Shirt", price: 20, quantity: 3}, {id: 2, name: "Pants", price: 50, quantity: 1}]

// c - Remove Item
let cartAfterRemoval = cart.filter(item => item.id !== 2);
console.log("After removing Pants:", cartAfterRemoval); // Output: [{id: 1, name: "Shirt", price: 20, quantity: 2}]

// Section H: Advanced Challenges
// Challenge 1: Remove Duplicates Without Set

const data = [1, 5, 2, 8, 5, 1, 9, 2];

// Approach 1: Using filter() with indexOf()
let uniqueData1 = data.filter((value, index) => data.indexOf(value) === index);
console.log("Unique data (filter + indexOf):", uniqueData1); // Output: [1, 5, 2, 8, 9]

// Approach 2: Using a loop with includes()
let uniqueData2 = [];
for (let value of data) {
  if (!uniqueData2.includes(value)) {
    uniqueData2.push(value);
  }
}
console.log("Unique data (loop + includes):", uniqueData2); // Output: [1, 5, 2, 8, 9]

// Challenge 2: Recreate reduce Using a Loop

function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  
  return accumulator;
}

// Test: Calculate the sum of an array
const testArray = [1, 2, 3, 4, 5];
let testSum = myReduce(testArray, (sum, current) => sum + current, 0);
console.log("Sum using myReduce:", testSum); // Output: 15

// Additional test: Calculate product
let testProduct = myReduce(testArray, (product, current) => product * current, 1);
console.log("Product using myReduce:", testProduct); // Output: 120

// Challenge 3: Shallow vs. Deep Copy for Nested Objects

const company = [{name: "A", details: {city: "NY"}}, {name: "B", details: {city: "LA"}}];

// a - Shallow Copy with spread operator
let shallowCopy = [...company];
shallowCopy[0].details.city = "Boston";

console.log("Original company after shallow copy modification:");
console.log(company); // Output: Both changed! [{name: "A", details: {city: "Boston"}}, ...]
console.log("Shallow copy after shallow copy modification:");
console.log(shallowCopy); // Output: [{name: "A", details: {city: "Boston"}}, ...]
console.log("Explanation: The spread operator creates a shallow copy - it only copies the top level.");
console.log("The nested 'details' object is still referenced from the original, so changes affect both.");

// b - Deep Copy using JSON.parse(JSON.stringify())
const company2 = [{name: "A", details: {city: "NY"}}, {name: "B", details: {city: "LA"}}];
let deepCopy = JSON.parse(JSON.stringify(company2));
deepCopy[0].details.city = "Boston";

console.log("\nOriginal company2 after deep copy modification:");
console.log(company2); // Output: [{name: "A", details: {city: "NY"}}, ...] - UNCHANGED
console.log("Deep copy after deep copy modification:");
console.log(deepCopy); // Output: [{name: "A", details: {city: "Boston"}}, ...] - CHANGED
console.log("Explanation: JSON.parse(JSON.stringify()) creates a true deep copy.");
console.log("All nested objects are completely independent, so changes only affect the copy.");

// Final Challenge
// Project: Tic-Tac-Toe Board Analyzer

// a - Board Setup (3x3 initialized with empty strings)
let ticTacToeBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// b - Place Moves
ticTacToeBoard[0][0] = "X"; // top-left
ticTacToeBoard[1][1] = "O"; // center
console.log("Board after two moves:", ticTacToeBoard);

// c - Check for Win
function checkWin(board, playerSymbol) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i].every(cell => cell === playerSymbol)) return true;
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    let colWin = true;
    for (let i = 0; i < 3; i++) {
      if (board[i][j] !== playerSymbol) {
        colWin = false;
        break;
      }
    }
    if (colWin) return true;
  }

  // Check main diagonal
  if (board[0][0] === playerSymbol && board[1][1] === playerSymbol && board[2][2] === playerSymbol) {
    return true;
  }

  // Check anti-diagonal
  if (board[0][2] === playerSymbol && board[1][1] === playerSymbol && board[2][0] === playerSymbol) {
    return true;
  }

  return false;
}

console.log("Does X win?", checkWin(ticTacToeBoard, "X")); // false
console.log("Does O win?", checkWin(ticTacToeBoard, "O")); // false



