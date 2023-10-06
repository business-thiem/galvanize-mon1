function joinArrays(arr1, arr2) {
    // your code here
    /* START SOLUTION */
  return arr1.concat(arr2)
    /* END SOLUTION */
  }

  function getElementsAfter(array, n) {
    // your code here
    /* START SOLUTION */
    if(array.length === 1){
        return []
    }
    return array.slice(n+1)
    /* END SOLUTION */
  }


  function getElementsUpTo(array, n) {
    // your code here
    /* START SOLUTION */
    array.splice()
    /* END SOLUTION */
  }

//   var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 5)
//   console.log(output); // --> ['a', 'b', 'c']




  function getAllElementsButFirst(array) {
    // your code here
    /* START SOLUTION */
    let arr2 = array.slice(1)
    return arr2
    /* END SOLUTION */
  }




function getAllElementsButLast(array) {
  // your code here
  /* START SOLUTION */
   return array.slice(0, array.length-1)
  /* END SOLUTION */
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]


//   if(array.length === 1){
//     return []
// } else if (n >= array.length){
//     let arr2 = array.reverse()
//     return arr2;
// }
// return array.slice(0,n)