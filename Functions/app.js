//Objects
// const person = {
//   firstName: "Shivam",
//   lastName: "Verma",
//   age: 21,
//   location: ["planet", "earth"],
//   isProgrammer: true,
// };

// console.log(person);
// const arr = [];
// console.log(typeof arr);

//Accessing Items from Objects

// console.log(person.firstName);

//adding new elements to the object

// person.middleName = "Tency";
// person.country = "india";
// console.log(person);

//delete from object
// delete person.firstName;

//Challenge

// const car = {
//   type: "Maruti",
//   model: "Suzuki",
//   color: "pink",
// };
// console.log(car.type);
// car.type = "Toyota";
// car.wheels = 4;
// console.log(car);

//Very Important Concepts

//Functions

// function callme() {
//   console.log("Joo young noona, i want a wife that looks like you");
// }

// callme();

// parameterized function
// function callHer(her) {
//   console.log(`Hey, ${her}`);
// }
// let Her = "Noona,I'm Gonna work my hardest";
// callHer(Her);

//Return in functions

// function dunno(idk) {
//   return idk + 2;
// }

// const dun = dunno(20);
// console.log(dun); //to display the function we use this else it wont be displayed by simply calling it

// Function Declaration Vs Function Experession

//Function Declaration
// function nameMy(name) {
//   console.log(`My name is ${name}`);
// }

// nameMy("Shivam");
//if i declare the function it will still work fine

//Function Expression
// let onePie = function (luffy) {
//   console.log(`My name is ${luffy}`);
// };

// onePie("Monkey.D");
//but if i call this function before it will throw an error

//VERY VERY VERY IMPORTANT CONCEPT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//VERY VERY VERY IMPORTANT CONCEPT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//VERY VERY VERY IMPORTANT CONCEPT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//CALLBACK FUNCTION
//DEFINITION -->> WHEN WE PROVIDE A FUNCTION AS AN (ARGUMENT) TO OTHER FUNCTION THAT FUNCTION IS KNOWN AS "CALLBACK FUNCTION"

// function noonaLee(name, callb) {
//   console.log(`Her name is ${name}`);
//   callb();
// }

// function callb() {
//   console.log("She is Shivam's Celebrity Crush");
// }

// noonaLee("Lee Joo Young", callb);

//Challenge
// function showCallFunc(fn) {
//   let varia = 10;
//   fn(varia);
// }

// showCallFunc(function (varia) {
//   console.log(varia);
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//NEW TOPIC VARIABLE SCOPE!!!!!!!!!!

//Variable Scope
//scope in javascript refers to current context of code whhich determines the accessibility of variables in js

//There are Two types of scopes in Javascript
//Global Scope -These are declared outside the code block
//Local Scope - These are declared inside the Code Block

//Global Variable
// let vari = "Im global"
// console.log(vari);


// function localbo() {
//     let text = "im local"; //local variable can only be accessed within the code block
// console.log(text);
// }

// localbo()

//another example of local var

// for (let i = 0; i < 5; i++) {
//     console.log(i); //output 1-4 as i is local variable

    
// }
// console.log(i); //no output as i is local variable


