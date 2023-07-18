//name export
//default export

export function add(a,b){
    return a+b;
}

export default function addmore(a,b,c){
    return a+b+c;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

export {subtract,multiply};