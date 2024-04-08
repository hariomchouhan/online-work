// Singleton -> If the object is created from the constructor, it will always be a singleton, if created from the literal, it will not be a singleton.
// Object.create

const mySym = Symbol("key1");

// object literals
const JsUser = {
  name: "Hariom",
  "Full Name": "Hariom Chouhan",
  [mySym]: "myKey",
  age: 18,
  location: "Indore",
  email: "hariom@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser.mySym); // Values with square brackets. (dot) can't do it
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "chouhan@gmail.com";

// console.log(JsUser.email);
// Object.freeze(JsUser)

JsUser.email = "chouhan@microsoft.com";
// console.log(JsUser);

JsUser.gretting = function () {
  console.log("Hello JS user");
};

JsUser.grettingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
  // this keyword is refer the object and his values
};

console.log(JsUser.gretting); // [Function (anonymous)]
console.log(JsUser.gretting()); // Hello JS user and also undefined
JsUser.gretting(); // Hello JS user
JsUser.grettingTwo(); // Hello JS user, Hariom
