JavaScript Array Functions

Welcome! This README.md is a quick reference guide for commonly used JavaScript array functions. Whether you're a beginner or need a refresher, this document covers essential methods with examples.

📚 Table of Contents

Basic Iteration Methods: forEach(), map()

Adding and Removing Elements: push(), pop(), unshift(), shift()

Searching and Filtering: find(), filter()

Transformation and Sorting: reduce(), sort()

Combining and Slicing Arrays: concat(), slice(), splice()

Utility Methods: join(), includes(), indexOf(), reverse()

🚀 Basic Iteration Methods

forEach()

Executes a function once for each element in the array.

const arr = [1, 2, 3];
arr.forEach(num => console.log(num));

map()

Creates a new array by applying a function to each element.

const arr = [1, 2, 3];
const doubled = arr.map(num => num \* 2);
console.log(doubled); // [2, 4, 6]

➕ Adding and Removing Elements

push()

Adds elements to the end of an array.

const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

pop()

Removes the last element from an array.

const arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]

unshift()

Adds elements to the beginning of an array.

const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]

shift()

Removes the first element from an array.

const arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]

🔍 Searching and Filtering

find()

Returns the first element that satisfies a condition.

const arr = [1, 2, 3, 4];
const result = arr.find(num => num > 2);
console.log(result); // 3

filter()

Creates a new array with elements that satisfy a condition.

const arr = [1, 2, 3, 4];
const result = arr.filter(num => num > 2);
console.log(result); // [3, 4]

🔄 Transformation and Sorting

reduce()

Executes a function on each element, resulting in a single output.

const arr = [1, 2, 3];
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

sort()

Sorts elements in place.

const arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

✂️ Combining and Slicing Arrays

concat()

Combines two or more arrays.

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

slice()

Returns a shallow copy of a portion of an array.

const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]

splice()

Adds/removes elements to/from an array.

const arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // [1, 'a', 'b', 4]

🛠️ Utility Methods

join()

Joins all elements into a string.

const arr = ['a', 'b', 'c'];
console.log(arr.join('-')); // 'a-b-c'

includes()

Checks if an array contains a specific element.

const arr = [1, 2, 3];
console.log(arr.includes(2)); // true

indexOf()

Returns the index of the first occurrence of an element.

const arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1

reverse()

Reverses the array in place.

const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
