function isOddLength(word) {
    // your code here
    /* START SOLUTION */
      return !isEven(word.length) ? true : false
    /* END SOLUTION */
  }
  
function isEven(num) {
    // your code here
    /* START SOLUTION */
    return num%2 === 0 ? true : false
    /* END SOLUTION */
}