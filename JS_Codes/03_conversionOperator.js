let score = "33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Hariom";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "Hariom" => true

let someNumber = 90;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);