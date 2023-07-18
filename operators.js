//assignment operators
let x = 10;
// 10 assigned to x

//arithmetic operators

//addition

let a = 4+5;
console.log(a); //9

//subtraction
a = 4-5;
console.log(a);//-1

//multiplication
a = 4*5;
console.log(a);//20

//exponentation
a = 2**3;
console.log(a);//8

//division
a = 10/3;
console.log(a);//3.3333

//modulous
a = 10%3;
console.log(a);//1

//increment
a++;
console.log(a);//2

//decrement
a--;
console.log(a);//1


//comparison operator

if(5==5){
    console.log("it is true"); //logs it is true
}

console.log("A"<"B"); // true

console.log(20>="20"); // 

/** 
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator
**/

//string operator
let aa = 5;
let bb = "hello";
let cc = aa+bb;
console.log(typeof cc, cc); //string 5hello

//logical operator
/**
    && 	logical and
    || 	logical or
    ! 	logical not
 **/

if(5>2 && 5=="5" || 10!=5){
    console.log('ok'); //consoles ok
} 

if(!false){
    console.log("it is true"); //consoles it is true
}

//bitwise operator
//operators that work on the binary representation of numbers. 
/** 
& 	AND 	5 & 1 	0101 & 0001 	0001 	 1
| 	OR 	5 | 1 	0101 | 0001 	0101 	 5
~ 	NOT 	~ 5 	 ~0101 	1010 	 10
^ 	XOR 	5 ^ 1 	0101 ^ 0001 	0100 	 4
<< 	left shift 	5 << 1 	0101 << 1 	1010 	 10
>> 	right shift 	5 >> 1 	0101 >> 1 	0010 	  2
>>> 	unsigned right shift 	5 >>> 1 	0101 >>> 1 	0010 	  2
**/
console.log(~11); //-12

console.log(5 << 2); //shifting binary representation of the number 5 two positions to the left
//each shift to the left doubles the value, effectivley mulitplying by 2
//consoles 20

//right shift //divides by two
//preserves the sign
console.log(5>>2); //1

//unsigned right shift
//does not preserve the sign
console.log(-10>>>1); //2147483643

//ternary operator
5>6?console.log("true"):console.log("false"); //false

//type operator
//typeof 	Returns the type of a variable

let abc = 55;
console.log(typeof abc); //number
