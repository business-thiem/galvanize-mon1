function average(){
    var total = 0;
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === 'number'){
            total = total + arguments[i];
        }
    }
    // console.log(total);
    var avg = total/arguments.length
    // console.log(avg);
    return Math.ceil(avg)
}


var output = average(1,2,3)
console.log(output)