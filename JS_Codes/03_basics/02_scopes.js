let a = 300

{} // scope

if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inside: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "Hariom"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "Hariom"
    if (true) {
        const surname = "Chouhan"
        // console.log(username + " " + surname);
    }
    // console.log(surname);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

addOne(5) // execute the function using hoisting
function addOne(num) {
    return num + 1
}


// addTwo(8) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
