//async await
//allows to write asynchronous code in more concise and readable way
// async - function keyword that indictes that the function will return a promise
//await - keryword that allows to wait for the completion of a promise before continuing execution

async function myFunction(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("hello resolve")
        }, 1000);
    });
    let result = await promise;
    console.log(result); //prints the value resolved by promise after 1sec
}

myFunction();


//another example

function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.9) {
          resolve(`Success - ${random}`);
        } else {
          reject('Error: Something went wrong');
        }
      }, ms);
    });
  }
 
 
  async function asyncExample() {
    try {
      console.log('a-Start');
       const a = await delay(2000); // Pause execution for 2 seconds
      console.log(a); //success
       console.log('a-Middle');
       const b = await delay(2000); // Pause execution for another 2 seconds
      console.log(b);
       console.log('a-End');
    } catch (error) {
      console.log(`a - ${error}`);
    }
  }
 
 
 asyncExample()
 
 
 //promise then catch
   function promiseExample() {
    try {
      console.log('p-Start');
       const a =  delay(2000); // Pause execution for 2 seconds
      a.then((res)=>{
        console.log(`p - ${a}`)
        return res
      })
      .then((val)=>{
        console.log(`p - ${val}`);
      })
      .catch((err)=>{
        console.log(`p - ${err}`)
      })
       console.log('p-Middle');
       const b =  delay(2000); // Pause execution for another 2 seconds
      b.then((res)=>{
        console.log(`p - ${b}`)
        return res
      })
      .then((val)=>{
        console.log(`p - ${val}`);
      })
      .catch((err)=>{
        console.log(`p - ${err}`)
      })
       console.log('p-End');
    } catch (error) {
      console.log(`p - ${error}`);
    }
  }
   promiseExample();

   //output
   //Promise { <pending> }
// a-Start
// p-Start
// p-Middle
// p-End
// hello resolve
// Success - 0.5443984150538841
// a-Middle
// p - [object Promise]
// p - Success - 0.48118366561545356
// p - [object Promise]
// p - Success - 0.383165427665876
// Success - 0.7173702337829915
// a-End

// we got the output like this
// here async await function is running next line only after the promise is resolved
// but for promise using .then it is not like async await
// .then will call its callback function after the promise is resolved
// but until then the next line are executed.