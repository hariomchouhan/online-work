function sayMyName() {
  console.log("H");
  console.log("A");
  console.log("R");
  console.log("I");
  console.log("O");
  console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);


function loginUserMessage(username = "Hariom") {
  // if(username === undefined) {
  if(!username) {
    console.log("Please enter a username");
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Hariom"))
console.log(loginUserMessage())