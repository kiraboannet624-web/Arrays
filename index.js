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

//Exercise two: Push, Pop, Shift, Unshift, Splice
let invetory=[10,20,30];

//a
invetory.push(40);
console.log(invetory);

//b
invetory.pop(40);
console.log(invetory);

//c
invetory.unshift(0);
console.log(invetory);

//d
invetory.shift(0);
console.log(invetory);

//e
invetory.splice(1,1,25,35);
console.log(invetory);


// exerise3
const originalScores = [90, 85, 78];
// b
const referenceCopy = originalScores;
console.log(referenceCopy);
// c
referenceCopy[0] = 100;
console.log("Reference Copy:", referenceCopy);
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
//the indexof, lastindex = if the first condition is successful it print out true then the condition stops
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));


//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));


//EXERCISE 5:Advanced searching with find and findIndex

const products =[
   
     {id:1,Name:"laptop",price:1200},
       {id:2,Name:"smartphone",price:25},
        {id:3,Name:"Tablet",price:75},
         {id:4,Name:"headphone",price:199},
];
//a
let foundProducts=products.find(product => product.id===2);
console.log(foundProducts);
//b

let foundIndex =products.findIndex(product=>product.price>1000);
console.log (foundIndex)



