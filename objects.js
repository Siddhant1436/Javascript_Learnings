//in some lang this is also called hashmaps smth like key - pair
const person={
    name: 'Siddhant',
    age: 21,
    isVergin: false,
}
const { name, age, isVergin } = person;

console.log(name); // 'Siddhant'
console.log(age);  // 21
console.log(isVergin); // false

//if you want to use different variable names, you can rename the destructured properties like this:
const { name: v1, age: v2, isVergin: v3 } = person;

console.log(v1); // 'Siddhant'
console.log(v2); // 21
console.log(v3); // false

//if you want to copy the obeject

const person2 = {...person};

//if you want to copy the whole object but one detail

const person3 = {...person, name:'Divy'};

console.log(person2);
console.log(person3);

//here the array names is copied to names1 and 'Tirth' is added to names 2

const names = ['Sid', 'Divy'];
const names1 = [...names,'Tirth'];

console.log(names1);

