//ES6 functions
//arrow functions
//default parameters

const a = ()=>{
    console.log("hola");
}

a();


const myFunction = (name,age=45)=>{ //age=45 is default parameter
    console.log(name,age);
}

myFunction("ram"); //ram 45
myFunction("ram",66); //ram 66


//traditional function

function add(a,b){
    console.log(a+b);
}

add(5,6); //11