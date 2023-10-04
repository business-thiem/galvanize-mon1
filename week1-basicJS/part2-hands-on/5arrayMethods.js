function getNthElement(array, n) {
    // your code here
    /* START SOLUTION */
      return array[n]
    /* END SOLUTION */
  }

  function getFirstElement(array) {
    // your code here
    /* START SOLUTION */
      return array[0]
    /* END SOLUTION */
  }

  function getLastElement(array) {
    // your code here
    /* START SOLUTION */
      return array[array.length-1]
    /* END SOLUTION */
  }


function addToFront(arr, element) {
    // your code here
    /* START SOLUTION */
    arr.unshift(element)
    return arr;
    /* END SOLUTION */
}


function addToBack(arr, element) {
    // your code here
    /* START SOLUTION */
  arr.push(element)
  return arr
    /* END SOLUTION */
  }

  var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]