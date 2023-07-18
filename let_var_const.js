//var is hoisted
console.log(a); // undefined --- here we do not get error for var as it is hoisted. at first a is inititalized with undefined

// console.log(c);
// console.log(b) // this gives reference error because let and const are not hoisted ... can not be accessed before initialization

var a = 10;

var a = 15;  // here var a can be redeclared as it is functional scoped variable
a=25; // ---- var can be reassigned
console.log(a);

//but let and const are not hoisted
//which means var can be accessed before we declare
let b = 20;

// let b = 30; ----- here b can not be redeclared as it is blocked scope variable
b = 30;  // ---- let can be reassigned
console.log(b);

const c = 30;

// const c = 55; ------ const also cannot be redeclared as it is blocked scope variable

//  c = 55;
//  console.log(c)  --- TypeError : Assignment to constant variable ... const cannot be reassigned as well.

//let and const was introduced in ES6


//
// concept of block scoped and functional scoped
// var - functional scoped
// const and let - block scoped

function myFunction(){
    if(true){
        let app = 4;
        var ball = 23;
        const cat = 5;
    }
    console.log(ball); //here we can console the value of ball which is var - functional scoped
    // console.log(app); // but here we cannot console the app(let) -- gives ReferenceError: app is not defined - block scoped
    console.log(cat); // but here we cannot console the cat(const) -- gives ReferenceError: cat is not defined - block scoped
}

myFunction()

