
// String example
let greeting = "Hello, world!";
console.log("String example: " + greeting); // Output: String example: Hello, world!

// Number examples
let age = 30;
let pi = 3.14159;
console.log("Integer example: " + age); // Output: Integer example: 30
console.log("Floating-point example: " + pi); // Output: Floating-point example: 3.14159

// Boolean examples
let isJavaScriptFun = true;
let isWinter = false;
console.log("Boolean example (true): " + isJavaScriptFun); // Output: Boolean example (true): true
console.log("Boolean example (false): " + isWinter); // Output: Boolean example (false): false

// Array example
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array example: " + fruits); // Output: Array example: Apple,Banana,Cherry
console.log("First element: " + fruits[0]); // Output: First element: Apple

// Object example
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log("Object example: " + JSON.stringify(person)); // Output: Object example: {"name":"Alice","age":25,"isStudent":true}
console.log("Person's name: " + person.name); // Output: Person's name: Alice

// Undefined example
let uninitialized;
console.log("Undefined example: " + uninitialized); // Output: Undefined example: undefined