function computeAreaOfARectangle(length, width) {
    // your code here
    /* START SOLUTION */
      return length*width
    /* END SOLUTION */
  }

  function computePerimeterOfARectangle(length, width) {
    // your code here
    /* START SOLUTION */
    return 2*(length+width)
    /* END SOLUTION */
  }

  function computePerimeterOfATriangle(side1, side2, side3) {
    // your code here
    /* START SOLUTION */
    return side1+side2+side3
    /* END SOLUTION */
  }


  var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23