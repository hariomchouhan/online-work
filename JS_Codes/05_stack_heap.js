// Stack (Primitive) & Heap (Non-Primitive)

let myFullName = "Hariom Chouhan";
let anotherName = myFullName;

anotherName = "Rahul Chouhan";

console.log(myFullName); // Hariom Chouhan
console.log(anotherName); // Rahul Chouhan

let userOne = {
    email: "hariomchouhan430@gmail.com",
    password: 123456
};

let userTwo = userOne;

userTwo.email = "hariom@gmail.com";

console.log(userOne.email); // hariom@gmail.com
console.log(userTwo.email); // hariom@gmail.com