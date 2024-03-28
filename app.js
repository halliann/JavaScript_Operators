console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;

let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(add); // 24
console.log(minus); // 16
console.log(multiply); // 80
console.log(dividing); // 5


// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str); // "1111"
console.log(num + str2); // "11eleven"
console.log(num + isPresent); // 12
console.log(firstName + num); // "Frodo"
console.log(isPresent + str); // "true11"
console.log(firstName + lastName); // FrodoBaggins


// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

console.log(val == str3); // true
console.log(val === str3); // false
console.log(!isPresent2); // true
console.log("eleven" == str4 && val >= str3); // false
console.log(!isPresent2 || isPresent2); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 != false); // false
console.log(0 !== false); // true