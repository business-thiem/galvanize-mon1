function isLastEvenOdd(numArray) {
    var temp = numArray[numArray.length-1] % 2
    if(temp === 0){
        return 'even'
    } else {
        return 'odd'
    }
}