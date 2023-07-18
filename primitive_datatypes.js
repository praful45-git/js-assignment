// the primitive data types in js are


//strings
// -- used to store text data
// enclosed in single qoute or double quoute
// string are immutable means its value cannot be changed once created
let str = "hello";
let string = 'hello string';

console.log(str,string); // hello hello string

//concatenate
const newString = str + " world";
console.log(newString); //hello world // here original string `str` is not changed
console.log(str); //hello

console.log(str.length); //5

//escape characters
let test = 'ram\'s car';    
console.log(test)



//numbers
// -- used to store numeric data. It includes interger as well as float

let num = 10; //integer
let number = 10.45; //floating
let n = 4;
console.log(num, number); // 10 10.45

console.log(10+"hello"); //10hello
console.log(num + number); //20.45
console.log(num + n); //14
console.log("the number  is "+num + n); //the number is 104



//booleans 
// -- used to strore logical data
// -- value true or false

let isRight = true;
console.log(isRight); // true
isRight = false;
console.log(isRight); //false

// truthy and falsy value

// truthy value always gives true
// meanwhile falsy value gives false

// except null, undefined , 0(zero),NaN(Not a Number), false, ''
// all other are truthy value

if(null || undefined || 0 || NaN || false || ''){
    console.log("truthy value");
}else{
    console.log("falsy value"); // we will get the output false value since above mentioned all are falsy values
}


// null

// it is used for assigning intentional empty value
// indicates that a variable does not have a value    

var score = null;
console.log(null)


//undefined

// indicates that variable 
// when variable is declared but not initialized value it is automatically assigned the value of undefined.

var task;
console.log(task); //undefined


