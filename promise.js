// promise is also used to maintain asyn execution in javascript
// we use promise to avoid callBack hell

let promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let success =true;

        if(success){
            console.log("Success");
            resolve(23);}
        else
            reject(new Error('I am an error'));
    },2000)
}
);


promise.then((anyParamerter) => {
    console.log(anyParamerter); // Output: Data fetched successfully!
}).catch((error) => {
    console.log('error'); // Output: Error fetching data!
});
