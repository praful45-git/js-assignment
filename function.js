//function
//js function--- block of code designed to perform ceratin task
//to run the function it need to be invoked or called

//simple js function

myFunction();
//normal js function is also hoisted
// at initial the myFunction is assigned all the codes of the function
// here function is defined before it is called

function myFunction(){
    console.log("hello function"); //hello function
}

myFunction();


//function parameters;

function add(a,b){ //the function accepting the values are known as parameters
    let c = a+b;
    console.log(c); //9
}

add(4,5); //while invoking the passed value are called arguments

// value returning from function

function subtract(a,b){
    let c = a-b;
    return c;
}

let sub = subtract(8,4);
console.log(sub); //4



