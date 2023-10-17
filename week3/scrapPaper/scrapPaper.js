function customShift(arr) {
    // your code here

    let temp = arr[0]
    if(arr.length === 0){
        return undefined;
    } else {
        for(let i = 0; i < arr.length; i++){
        
            if(arr.length === 0){
                return undefined;
            } else {
                arr[i] = arr[i+1]
            }
            
        }
    }
    

    arr.length = arr.length - 1
    return temp;
    // return arr;
  }

// let arr = [1,2,3,4,5]

// // customShift(arr)

// console.log(customShift(arr))


// notes on what to return, etc
function customUnshift2(arr, elem) {
    // your code here 
    let arr2 = [elem]
    for(let i = 0; i < arr.length; i++){
        arr2[i+1] = arr[i]
    }
    arr = arr2;
    return arr;
}

  let addLetter = 0
  let arr2 = [1,2,3,4]



console.log(customUnshift2(arr2, addLetter));


// function customUnshift2(arr, elem) {
//     var storage = [elem]
//     for ( var i = 0; i < arr.length;i++) {
//       storage[i+1] = arr[i]
//     }
//     arr = storage
//     return arr;
//   }


function customUnshift(arr, elem){

}

console.log(customUnshift(arr2, addLetter));


