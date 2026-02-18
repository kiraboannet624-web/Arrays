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

