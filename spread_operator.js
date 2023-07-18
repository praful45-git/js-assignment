//spread operator
// unpacks the elements
// allows to expand or spread elements from an iterable(such as array, object) into an individual elements.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr1); //[ 1, 2, 3 ]
console.log(arr2); //[ 1, 2, 3, 4, 5, 6 ]

//strings
const str = "hello";
const str1 = [...str];
console.log(str1); // [ 'h', 'e', 'l', 'l', 'o' ]

//concatenate arrays
const myArr = [...arr1, ...arr2];
console.log(myArr);  //[1, 2, 3, 1, 2,3, 4, 5, 6]

//copying arrays
//creates shallow copy of an array
// means though changing in the copied array it will not reflect in the original array
// but it does not apply for the nested array . the value get changed
const original = [1, 2, 3, [1, 2, 3]];
const copy = [...original];
console.log(copy); //

console.log(original[3][1]); //2
copy[3][1] = 5;
console.log(original[3][1]); //5


//object
// here also shallow copy as in the array
const obj = {
    name: "harry",
    age: 55,
    address: {
        temporary: "ktm",
        permanent: "bkt"
    }
};
const copyObj = { ...obj };
console.log(copyObj);

copyObj.age = "45";
console.log(obj.age, copyObj.age); // 55 45

//for nested

copyObj.address.temporary = "chitwan";
console.log(obj.address.temporary,copyObj.address.temporary); //chitwan chitwan
