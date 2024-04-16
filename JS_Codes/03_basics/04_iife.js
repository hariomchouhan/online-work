// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log(`DB Connected!`);
})();
// Note:- IIFE ko semicolon se end karna important hai warna interperetor ko lagega ki function end nahi hua hai

// IIFE which will invoke the function immediately

( (name) => {
    // Unnamed IIFE
    console.log(`DB Connected Two! ${name}`);
} )("hariom")