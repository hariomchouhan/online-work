const score = 300;
// console.log(score); // 300

const balance = new Number(400);
// console.log(balance); // [Number: 400]

// console.log(balance.toString().length); // 3
// console.log(typeof(balance.toString())); // string
// console.log(balance.toFixed(2)); // 400.00

const otherNumber = 123.989089;
// console.log(otherNumber.toPrecision(2)); // 1.2e+2
// console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000;
// console.log(hundreds); // 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000


console.log("+++++ Math ++++++");

// +++++++++++++++++++  Maths  +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.min(4,3,45,2)); // 2
// console.log(Math.max(4,3,45,2)); // 45

console.log(Math.random()); // 0.87823482374324
console.log((Math.random()*10) + 1); // 3.2839382789832
console.log(Math.floor(Math.random()*10) + 1); // 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 12