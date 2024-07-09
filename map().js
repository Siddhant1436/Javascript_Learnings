const arr = [1,2,3,4];

const arr1 = arr.map( (num) => { return num*2});

console.log(arr1);

function double(num) {
    return num * 2;
  }
  
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(double); //in map the fun doubles takes eac element of arr as a arg.
  console.log(doubled); // [2, 4, 6, 8]

//.map() with Anonymous Function
  const doubled1 = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubled1); // [2, 4, 6, 8]