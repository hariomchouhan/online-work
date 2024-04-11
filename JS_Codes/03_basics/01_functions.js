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
// console.log(loginUserMessage())

// Putting ... in the parameter of a function is called rest operator.
function calculateCartPrice(val1, val2, ...nums) {
  return nums
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hariom",
  // price: 999
  prices: 999
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//   username: "Varsha",
//   price: 999
// })

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 660]))