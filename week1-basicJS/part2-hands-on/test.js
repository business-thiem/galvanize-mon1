function getElementsUpTo(array, n) {
    // your code here
    /* START SOLUTION */
    if(array.length <= 1){
        return []
    } 
    
    
    // else if (n >= array.length){
    //     let arr2 = array.reverse()
    //     return arr2;
    // }
    return array.slice(0,n)
    /* END SOLUTION */
  }


  var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']