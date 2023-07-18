//non primitive data types
// they are referenced type

//array
// special variable which can hold more than one value
// 
let a = [1,9,45,35,24]

console.log(a);
console.log(typeof a); //object

//array can also be created as
const arr = new Array("ram","shyam","hari")
console.log(arr);

//accessing array - arr[indexNumber]
console.log(arr[0]); //ram
console.log(arr[1]); //shyam
console.log(arr[2]); //hari

//js array can have data of any data type it can have number , string , object , array inside the same array

let array = [1,"ram",{name:"gita",age:34},[1,2,3,"hello js"]];
console.log(array); //[ 1, 'ram', { name: 'gita', age: 34 }, [ 1, 2, 3, 'hello js' ] ]


//object

let myObj = {name:"hari",age:45};
console.log(myObj);
console.log(typeof myObj); //object

//accessing object
let empname = myObj.name
console.log(empname); //hari
empname = myObj["name"];
console.log(empname); //hari