// https://youtu.be/4lb2pXWWXJI?si=Pg92nfGJ6ej8tTZo

// const instaUser = new Object() // This is Singleton object
const instaUser = {} // This is Non-Singleton object

instaUser.id = "123abc"
instaUser.name = "Hari"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "hari@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hariom",
            lastName: "Chouhan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
const obj5 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)
console.log(instaUser); // { id: '123abc', name: 'Hari', isLoggedIn: false }

console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)); // [ '123abc', 'Hari', false ]
console.log(Object.entries(instaUser)); // [ [ 'id', '123abc' ], [ 'name', 'Hari' ], [ 'isLoggedIn', false ] ]

console.log(instaUser.hasOwnProperty('isLogged')); // hasOwnProperty Checks whether this object has this value or not