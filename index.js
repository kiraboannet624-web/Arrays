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