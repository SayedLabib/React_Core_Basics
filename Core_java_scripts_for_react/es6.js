
// Have to know about the template strings

array = [1, 2, 3, 4, 5];

const students = {

    name: "John",
    age: 20,
    grade: "A"
};

const about = `

My name is ${students.name} and I am ${students.age} years old. I got grade ${students.grade} in my exams.

`;

console.log(about);

// Arrow functions

const addingAge = (son, father) => {
    return son + father;
}

addingAge(20, 50); // 70

// Spread operator

const newArray = [...array];

array.push(6);
array.push(7);
array.push(8);

console.log(newArray);
console.log(array);

// Create a new array from an older array using an element

const currentArray = [...array, 9];

console.log(currentArray);

