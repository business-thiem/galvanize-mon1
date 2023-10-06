function areBothOdd(num1, num2) {
    // your code here
    /* START SOLUTION */
      return isEven(num1) || isEven(num2) ? false : true
    /* END SOLUTION */
  }
  
  function isEven(num) {
      // your code here
      /* START SOLUTION */
        return num%2 === 0 ? true : false
      /* END SOLUTION */
    }