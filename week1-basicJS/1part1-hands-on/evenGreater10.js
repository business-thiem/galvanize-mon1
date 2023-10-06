function isEvenAndGreaterThanTen(num) {
    // your code here
    /* START SOLUTION */
    return num > 10 && isEven(num) ? true : false
    /* END SOLUTION */
  }
  
function isEven(num) {
    // your code here
    /* START SOLUTION */
    return num%2 === 0 ? true : false
    /* END SOLUTION */
}