//loose equality
// ==
// allows coercion
// better to use when incoming types are known

const a = 5;
const b = '5';
if(a==b){
    console.log("loose equality"); //loose equality
}


//strict equality
// ===
// does not allow coercion
// better to use when incoming types are unknown

if(a===b){
    console.log("loose");
}
else{
    console.log("strict equality"); //strict equality
}
