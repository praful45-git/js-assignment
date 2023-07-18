//promise is an object representing the eventual completion or failure of an 
//asynchronous operation

//promise data are immutable 
//we have promise states as follows
//-pending: initail state neither fulfilled nor rejected
//-resolved : can be either fulfilled or rejected
//---fullfilled: meaning that the operation was completed successfully
//---rejected: meaning that the operation failed

const api = "https://jsonplaceholder.typicode.com/todos/1"


const res = fetch(api);
console.log(res) //returns promise in pending state but after sometime it is resolved
//in browser console if we expand then we can see that it is resolved because at starting 
// when we try to fetch it immediately return promise in pending state
//but during console time it is already resolved so we see that

const data = res.then(response=>{
    return response.json(); //when ever there is promise chain inside the promise chain we have to return data to the chain
})

console.log(data); // this also return promise 

data.then(val=>{
    console.log(val); //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
})

//doing at once
fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data); //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
})


//creating own promise

const a = new Promise(function(resolve, reject){
    if(Math.floor(Math.random()*10)%2){
        resolve("resolve promise");
    }
    else{
        reject("reject promise");
    }
})

a.then(val=>{
    console.log(val); //resolve promise
}).catch(err=>{  //catch is used to handle the rejected/failure state in the promise
    console.log(err); //reject promise
})


