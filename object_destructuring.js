// object destructuring
// allows to extract properties from an object and assign them to variables

const obj = {
    a: "aa",
    b: 45,
    c: {
        d: "dd",
        e: 785
    },
    foo:"hello"
}

const {a,b,c} = obj; //here the variable names should match the property names in the object

console.log(a,b,c); //aa 45 { d: 'dd', e: 785 }

//setting default value
const {foo = 'bar'} = obj; //in default bar is assigned to foo if it property is undefined in the object
console.log(foo);


//alias assignment

const newObj = {
    name : "ram bahadur",
    age: 77
}

const {name: fullName, age} = newObj;
console.log(fullName); //ram bahadur//here if you console name then it give error as name is aliased to fullName