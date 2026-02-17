// exerise 1
const productCategories = ["Books", "Electronics", "clothing Home" , "Kitche Toys $ Games"]
//  a
console.log (productCategories[0]);
// b
console.log(productCategories[productCategories.length - 1]);
// c
console.log(productCategories.length);
// d
productCategories[1] = "pen";
// e
console.log(productCategories);
// exerise3
const originalScores = [90, 85, 78];
// b
const referenceCopy = originalScores;
console.log(referenceCopy);
// c
referenceCopy[0] = 100;
console.long("reference Copy :", referenceCopy);
// d
const spreadCopy = [...originalScores] // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);
 

// section 3 seaching $ checking 
// execise4 :finding elements by index and value

const studentNames= ["Alice", "Bob", "Charlie", "Alice", "David"];

//a 
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));



