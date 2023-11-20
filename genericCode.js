
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


console.log(calculate(arr,area))