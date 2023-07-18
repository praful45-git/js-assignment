//call back hell
// call back fnctions inside call back function
// forms the pyramid of doom like structure
// makes code unreadable and unmaintainable

function one(a,cb){
    let res = a*2;
    cb(res); 
}
function two(a,cb){
    let res = a*2;
    cb(res); 
}
function three(a,cb){
    let res = a*2;
    cb(res); 
}
function four(a,cb){
    let res = a*2;
    cb(res); 
}



one(2,function(b){
    two(b,function(c){
        three(c,function(d){
            four(d,function(e){
                console.log(e); //32
            })
        })
    })
})