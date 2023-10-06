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

  function removeFromFront(arr) {
    // your code here
    /* START SOLUTION */
    if(arr.length === 0){
        return []
    }
    arr.shift()
    return arr
    /* END SOLUTION */
  }
