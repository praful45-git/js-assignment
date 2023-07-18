//string literal
//a sequence of characters enclosed in double quotes(")or single quotes(')

const string = "Hello everyone";
const str = ' this is string literal';

const concat = string + str;
console.log(concat); //Hello everyone this is string literal


// template literals
// backticks (`) are also used to create string literals in JS.
// string literals enclosed in backticks are called template literals.
// more powerfull form of string literals allowing to embed expressions and variables in the string - string interpolation


const myName = "praful";
console.log(`My name is ${myName}`); //My name is praful