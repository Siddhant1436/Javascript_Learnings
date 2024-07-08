//fun withou any arguments

function greet(){
    console.log("Hello World");
}

//function with arguments

function Greet(name, lastName){
    console.log("Hello "+ name +" "+lastName);
}

//function returning some value

function square(number){
    return number*number;
}

//this is called an arrow function used widely in so many of react codes
const cube = number => {
    return number*number*number;
}

//another way to write the same thing
const Cube = num => num * num * num;

// this is an arrow function without any arguments
//you have to put () instead of arguments
let age = 18;
const legal = () => {
    return age>=18 ? true: false;
}

//multiple arguments arrow functions
const add = (a, b) => a + b;


greet();
Greet('Siddhant', 'Patel')
console.log("the square of 16 is "+ square(16));

console.log(cube(3));
console.log(Cube(4));
console.log(legal());
console.log(add(2,3));