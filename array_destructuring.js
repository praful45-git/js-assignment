//array destructuring
// JS features that allows us to extract elements from an array
// into individual variables

let arr = ["apple","ball","cat","dog","elephant"];

let [a,b,c,d,e]= arr;

console.log(a); //apple
console.log(b); //ball
console.log(c); //cat
console.log(d); //dog
console.log(e); //elephant

//if need to skip then
[a,,c,,e]= arr;
console.log(a,c,e); //apple cat elephant

//rest operator 
let [first,second,...remaining] = arr;
console.log(a,b,remaining); //apple ball [ 'cat', 'dog', 'elephant' ]




