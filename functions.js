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



//this is called an arrow function(a type of anonymous function) 
const cube = number => {return number*number*number;};

//if you have single line code then can write like this.
const Cube = num => num * num * num;

//an arrow function without any arguments
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