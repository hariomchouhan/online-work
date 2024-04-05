// arrays

// Link to study - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [1, 2, 3, 4, 5];

console.log(myArr[0]); // 1

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()
console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3)); // 2

const newArray = myArr.join();

console.log(myArr); // [ 1, 2, 3, 4, 5 ]
console.log(newArray); // 1,2,3,4,5


// slice, splice

console.log("A ", myArr); // A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);

console.log(myn1); // [ 2, 3 ]
console.log("B ", myArr); // B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);

console.log(myn2); // [ 2, 3, 4 ]
console.log("C ", myArr); // C  [ 1, 5 ]
