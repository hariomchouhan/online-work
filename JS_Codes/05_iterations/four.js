const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    rb: "Ruby",
    swift: "Swift by apple",
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "java", "py", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("FR", "France")
// map.set("UK", "United Kingdom")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(map[key]);
// }
// Note:- map is not iterate so for in loop is not work in map