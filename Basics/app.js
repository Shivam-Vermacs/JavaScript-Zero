//(reserved keyword) (variable name) (type of value)

// let name;
// console.log(name); //undefined coz no value in variable

// let crush;  //declaration
// crush = "joo young"; //assign values to variable
// console.log(crush); //display in console

//camelcasing is necessary
//things not to do while declaring variable

// let 10var="shivam"; //cant start with a no

// let var-web="shivam"; //cant put dash in between it will assume you are subtracting

// let variable shivam="shivam"; //cant put space as it assume there are two variables

//let allows us to update values unlike const where value remains constant

// let name = "Shivam";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// let gender = "Male";
// let twitterHandle = "Tencyrkgk";
// console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);

//primitive data types
//Numbers

// let num = 100000;
// console.log(num);

//typeof (gives type of var)

// let vir = 10.1;
// console.log(typeof vir);

//basicMath

// let no = 2;
// console.log(2 + 3); //add
// console.log(2 - 1); //substract
// console.log(394 / 2); //divi
// console.log(394 % 2); //modulo
// console.log(394 * 2); //multiplication
// console.log(394 ** 2); //power

// let count = 0;
// count++;
// count--;
// console.log(count);

// let firstFavNumber = 8;
// let secondFavNumber = 9;

// console.log(firstFavNumber + secondFavNumber);
// console.log(firstFavNumber - secondFavNumber);
// console.log(firstFavNumber * secondFavNumber);
// console.log(firstFavNumber / secondFavNumber);
// console.log(firstFavNumber % secondFavNumber);
// console.log(firstFavNumber ** secondFavNumber);

//Boolean

// let a = true;
// console.log(a);

//falsy values

//false
//null
//undefined
//0
//-0
//NaN
//'',"",``,(empty quotes)

//challenge2

// let isjsprlang = true;
// let isjshard = false;
// let favnum = 7 + undefined;

// console.log(isjsprlang);
// console.log(isjshard);
// console.log(favnum);

//Equality Operators
//=== strict equality (type + value)
//!== strict non-equality operator (type + value)
//= lose equality operator (value)
//!= loose non equality operator (value)

// console.log("10" == 10);

// challenge3
// let firstFavNumber = 7
//   secondFavNumber = 8;
// console.log(firstFavNumber > secondFavNumber);
// console.log(firstFavNumber < secondFavNumber);
// console.log(firstFavNumber >= secondFavNumber);
// console.log(firstFavNumber <= secondFavNumber);
// console.log(firstFavNumber === secondFavNumber);
// console.log(firstFavNumber !== secondFavNumber);
// console.log(firstFavNumber == secondFavNumber);
// console.log(firstFavNumber != secondFavNumber);

//Strings
// let firstName = "Lee ",
// secondName = "Joo young";
// console.log(firstName.concat(secondName));

//Append
// let myName = "Shivam",
//   mySurname = " verma";
// console.log((myName += mySurname));

//Length and Cases
// let noonaCrush = "Lee joo Young";
// console.log(noonaCrush.length);
// console.log(noonaCrush.toLowerCase());
// console.log(noonaCrush.toUpperCase());

//Slice
// console.log(noonaCrush.slice(0, 3));

//Split and Join
// let crushName = "Lee Joo";
// console.log(crushName.split(" ").join(" "));

//includes
// let crush = "   Lee Young";
// console.log(crush.includes("L"));

// Trim
// console.log(crush.trim());

// challenge4
// let firstFavActor = "Lee";
// let lastFavActor = "Young";
// let fullName = firstFavActor + lastFavActor;
// let upprCse = fullName.toUpperCase();
// let message = `My fav actor is ${fullName} and she is a very talented actor`;
// console.log((message += " and her best show is Itaewon Class"));

//Type Conversion

//convert string to number
// let num = "59";

// console.log(typeof num);

// num = +num;
// num = parseInt(num);
// console.log(typeof num);

//Convert Number to String

// let string = 29;

// string = string.toString();
// console.log(typeof string);

// let num = "59.232";

// num = parseFloat(num);
// console.log(typeof num);
