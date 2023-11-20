
const arr= [3,1,2,4]


const calculate = function(radius,logic){
    let output = []

    for(let i = 0;i<radius.length;i++){

        output.push(logic(radius[i]))
    }
    return output;
}

const area = function(x){
    return Math.PI * x * x;
}

function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}


function calculateFn(fn,a,b){
return fn(a,b);
}

console.log(calculateFn(add,1,2))
// console.log(calculate(arr,area))