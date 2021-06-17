/* extra 

* template literals 
* spread operator
* for of loops 

*/

// template literals => generate a string
let name = "fsa";

let oldWay = "Hello" + name + "!";
let newWay = `Hello ${name}!`; // using a template literal

/* 
    
    spread operator => pull elements out of an array 

*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// copy
console.log([...arr1]);
// merge
console.log([...arr1, ...arr2]); // alternative to .concat()
// copy and add to front
console.log([5, ...arr1]);
// copy and add to back
console.log([...arr1, 7]);
// more use cases next week!

/* 

    for of loops 

*/
let arr3 = [1, 2, 3];

// traditional for loop using a counter
for (let i = 0; i < arr3.length; i++) {
  const num = arr3[i];
  console.log(num);
}
// for of loops => alternative to traditional for loops. Not a complete alternative, but only for the most basic cases
for (const num of arr3) {
  console.log(num);
}
