
// console.log(this); //windows

// function my(){
//     console.log(this); //windows
// }
// my();

// const obj ={
//     name:"ram",
//     hello:function(){
//         console.log(this); //{ name: 'ram', hello: [Function: hello] }
//     }
// }

// obj.hello();

// const obj1 ={
//     name:"ram",
//     hello:function(){
//         function ok(){
//             console.log(this); //windows
//         }
//         ok();
//     }
// }

// obj1.hello();

// const envoke = ()=> console.log(this);

// envoke(); //window


console.log(this); //window

function abc(){
    console.log(this); 
}
abc(); //window

const obj = {
    fname: "ram",
    fn: function(){
        console.log(this);
    },
    fn2: ()=>{
        console.log(this);
    }

}

obj.fn(); //object
obj.fn2(); //window

//
const person = {
    name:"Ram",
    func: function(){
        console.log(this);
    }
}

const person2 = {
    name:"Sita"
}

function x (){
    console.log(this);
};

// Calls a method of an object, substituting another object for 
// the current object.
x.call(); //window
x(); //window
x.call(this); //window --same like x.call() and x()
x.call(person); //obj -- Object { name: "Ram" }
x.call(person2); // Object { name: "Sita" }

//
person.func(); //Object { name: "Ram", func: func() }
person.func.call(); //window
person.func.call(this); //window
person.func.call(person2); //Object { name: "Sita" } which is of person2 not in person
person.func.call(person); //Object { name: "Ram", func: func() }