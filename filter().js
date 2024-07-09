//The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
const number = [1,2,3,4];
function asd(n){
    return n>=2;
}

const even = number.filter((num) => { return num%2==0} ) // in this also you take each element of arr as an arg and return the cond.
console.log(even);

const greaterThanTwo =number.filter(asd);
console.log(greaterThanTwo);