
// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

console.log(first, second); // Output: 1 2

// Object destructuring
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name, age, city } = person;

console.log(name, age, city); // Output: Alice 30 New York
