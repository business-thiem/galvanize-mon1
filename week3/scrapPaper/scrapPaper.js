function customShift(arr) {
    // your code here

    let temp = arr[0]
    for(let i = 0; i < arr.length; i++){
        
        if(arr.length === 0){
            return undefined;
        } else {
            arr[i] = arr[i+1]
        }
        
    }

    arr.length = arr.length - 1
    return temp;
    // return arr;
  }

let arr = [1,2,3,4,5]

// customShift(arr)

console.log(customShift(arr))