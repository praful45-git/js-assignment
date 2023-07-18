//for loop

for(let i =0;i<10;i++){
    console.log(i); 
}
// consoles 0 to 9


//while loop
let n=5
while(n>0){
    console.log("hello");
    n--;
}
//consoles hello 5 times


//do...while loop
//code block is executed at least once
let num = 0
do{
    console.log(num);
    num++;
}while(num<5);
//0 1 2 3 4


//for...of loop
// introduced in ECMAScript 6 and is used specifically for iterating over iterable objects such as arrays, strings, or other collections.

const fruits = ["apple","orange","banana"]
for(const fruit of fruits){
    console.log(fruit);
}
//apple
//orange
//banana

//for...in loop
//used to iterate over the properties of an object

const obj = {
    name:"harry",
    age:75,
    gernder: "male"
}

for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
}
//name : harry
// age : 75
// gernder : male