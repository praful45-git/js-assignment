// callback function
//the function passed as the argument to another function is known as call back function

function myFunction(a,cb){
    let res = a+5;
    cb(res);
};

myFunction(5,add);

function add(a){
    let c = a+5;
    console.log(c);
}

//

const func = (a,cb)=>{
    let res = a+10;
    cb(res);
}

func(55,function(a){
    console.log(a)
});

//OR
// func(55,(a)=>{
//     console.log(a)
// });