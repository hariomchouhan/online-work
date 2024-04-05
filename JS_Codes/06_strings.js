let name = "Hariom";

let surname = "Chouhan";

// console.log(name + surname);

// console.log(`Hello, My name is ${name} ${surname}`);

const gameName = new String('Hariom-Chouhan-Sagdod');

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // Not change original value
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newStringOne = "    Hariom      ";
console.log(newStringOne);

const newStringTwo = newStringOne.trim();
console.log(newStringTwo);

const url = "https://hariom.com/hariom%20chouhan";

console.log(url.replace('%20', '-'));
console.log(url.includes("ram"));

console.log(gameName.split('-'));