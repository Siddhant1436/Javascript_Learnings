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
greet();
Greet('Siddhant', 'Patel')
console.log("the square of 16 is "+ square(16));