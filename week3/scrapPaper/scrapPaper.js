function customShift(arr) {
    // your code here
    let temp = arr[0]
    if(arr.length === 0){
        return undefined;
    } else {
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i+1]
        }
    }
    arr.length = arr.length - 1
    return temp;
    // return arr;
  }




// notes on what to return, etc
function customUnshift(arr, elem) {
    // your code here 
    arr.length = arr.length + 1

    //shift the elements in the array to the right after increasing the length
    for(let i = arr.length - 1; i>0; i--){
        arr[i] = arr[i-1]
    }

    arr[0] = elem //then arr[0] will be open for adding elem
    return arr;
}

  let addLetter = 'a'
  let arr2 = ['b','c','d','e','f']





  //shift removes first element, then shift everything left 
  //unshift moves everything right, then adds first element

  //Fact: apparently both run the same O(n) time because they still go through each element of the arrays one by one to add them back in after modifying the original array