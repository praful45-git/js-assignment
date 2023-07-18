//rest operator (...)
// used to pack the elements in a variable
// used to capture the multiple function arguments or elements of an array
// or object into a single variable

// used in destructuring

let arr = ["ram","shyam","hari","krishna","gita"];

let [first,second,...rest] = arr;
console.log(first,second,rest); //ram shyam [ 'hari', 'krishna', 'gita' ]
// here remaining elements of array arr is packed into variable 'rest' in the form array

let obj = {
    name: "ram",
    age: 45,
    subjects : ["math","science","english"]
};

let {name,...rem} = obj;
console.log(name, rem); //ram { age: 45, subjects: [ 'math', 'science', 'english' ] }
console.log(rem.age); //45
// here remaining elements of object obj is packed into variable 'rem' in the form obj


//used in function parameters

function add(...num){
   let sum = num.reduce((acc,curr)=> acc+curr,0);
   return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9)) //45
