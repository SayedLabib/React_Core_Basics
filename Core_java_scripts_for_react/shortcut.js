

// trythy, falsy, ternary operator, shortcut and or

// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: true, non-zero numbers, non-empty strings, objects, arrays

// Ternary operator

let age = 18;

if (age >= 18) {
    adult = "You are an adult.";
}
else {
    minor = "You are a minor.";
}

// we can write the above code in a single line using the ternary operator

const result = age>=18 ? "You are an adult." : "You are a minor."; 

// console.log(result);

// number to string convsersion shortcut

const num = 123;
const str = num + ""; // This will convert the number to a string
// console.log(str); // Output: "123"

// string to number conversion shortcut

const strNum = "456";
const num2 = +strNum; // This will convert the string to a number
// console.log(num2); // Output: 456