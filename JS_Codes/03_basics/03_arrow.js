const user = {
    username: "Hariom",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Kamal"
// user.welcomeMessage()

// console.log(this);


function coffee() {
    const username = "Hariom"
    console.log(this); // this is work
    console.log(this.username); // this is not work
}

// coffee() // this keyword only work in objects not work in function

const arrowFunction = () => {
    const username = "Hariom"
    console.log(this); // this is not work
    console.log(this.username); // this is not work
}

// arrowFunction() // this keyword only work in objects not work in arrow function

// An explicit return is when you explicitly write the word return in the function. To do an implicit return, remove the word return , then move what you are returning up to the same line as the rest of the function.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// An implicit return is a way of returning a value from a function without explicitly using the return keyword. This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword when the function only has one expression.

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// Note:- Whenever we return an object from an arrow function, we have to use parentheses ().
const addTwo = (num1, num2) => ({username: "Hariom"})

console.log(addTwo(2, 4));