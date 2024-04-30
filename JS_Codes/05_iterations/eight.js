const myNums = [1, 2, 3]

// const newNums = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const newNums = myNums.reduce( (acc, currval) => (acc + currval), 4)
console.log(newNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 9999,
    },
    {
        itemName: "mobile course",
        price: 5999,
    },
    {
        itemName: "ai course",
        price: 14999,
    },
]

const totalVal = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(totalVal);