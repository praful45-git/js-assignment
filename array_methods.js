

const arr =[1,2,3,4,5,6,7,8,9]

//filter
const even = arr.filter(val=>val%2==0);
console.log(even) // [ 2, 4, 6, 8 ]

//reduce
const sum = arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum); //45

//sort
// used to sort the elements of an array in place
//By default, the sorting is performed based on the Unicode code point value of each element converted to a string.
// Unicode code point refers to a unique numeric value assigned to each character or symbol in the Unicode standard. 
// eg 'A' unicode is U+0041 -- '\u0041'
console.log(`\u0041`); //A

const names = ["ram","shyam","hari","gita"]
// Sorts an array in place. This method mutates the array and returns a reference to the same array.
names.sort();
console.log(names); //[ 'gita', 'hari', 'ram', 'shyam' ]

//
const numbers = [45,22,12,99,66]
numbers.sort((a,b)=>a-b);//sorts in ascending
// It is expected to 
// return a negative value if the first argument is less than the second argument, 
// zero if they're equal, and 
// a positive value otherwise.
console.log(numbers); //[ 12, 22, 45, 66, 99 ]
numbers.sort((a,b)=>b-a); //sorts in descending
console.log(numbers); //[ 99, 66, 45, 22, 12 ]


//includes
// Determines whether an array includes a certain element, returning true or false as appropriate.
const ans = names.includes("hari");
console.log(ans); //true


//find
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const value = numbers.find(val=>val<25);
console.log(value); //22



//forEach
//Performs the specified action for each element in an array.
names.forEach((val,index,arr)=>{
    console.log(`${index}-${val}-${arr}`)
})

//ouptut
// 0-gita-gita,hari,ram,shyam
// 1-hari-gita,hari,ram,shyam
// 2-ram-gita,hari,ram,shyam
// 3-shyam-gita,hari,ram,shyam

//splice
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// array.splice(start, deleteCount, item1, item2, ...);

const nums = [1, 2, 3, 4, 5];
//starting index 2 , number of removed - 2, and 55,66,77 added in the array
const removed = nums.splice(2, 2,55,66,77);
console.log(nums); // [ 1, 2, 55, 66, 77, 5 ]
console.log(removed); // [3, 4]


//concat
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const newConcat = nums.concat(names);
console.log(newConcat); 
/**[
    1,      2,
    55,     66,
    77,     5,
    'gita', 'hari',
    'ram',  'shyam'
  ]**/


//push
// Appends new elements to the end of an array, and returns the new length of the array.
const n = nums.push(99)
console.log(nums);//[ 1, 2, 55, 66, 77, 5, 99 ]
console.log(n); //7


//pop
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const pop = nums.pop();
console.log(pop); //99
console.log(nums); //[ 1, 2, 55, 66, 77, 5 ]

//shift
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
nums.shift();
console.log(nums); //[ 2, 55, 66, 77, 5 ]


//unshift
// Inserts new elements at the start of an array, and returns the new length of the array.
nums.unshift(78,90);
console.log(nums); //[ 78, 90, 2, 55, 66, 77, 5 ]


