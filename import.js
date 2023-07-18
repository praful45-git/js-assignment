import {add,subtract,multiply } from "./export.js";
import addmore from "./export.js";

const res = add(50,5);
console.log(res);

const res1 = subtract(50,5);
console.log(res1);

const res2 = multiply(50,5);
console.log(res2);

const res3 = addmore(50,5,10);
console.log(res3);



//in package.json added type:module for import /export
//can also be used by making the extension of the file .mjs