function getProperty(obj, key) {
    // your code here
    /* START SOLUTION */
      return obj[`${key}`]
    /* END SOLUTION */
  }


  function addProperty(obj, key) {
    // your code here
    /* START SOLUTION */
      obj[`${key}`] = true
    /* END SOLUTION */
  }

  function removeProperty(obj, key) {
    // your code here
    /* START SOLUTION */
      delete obj[`${key}`]
    /* END SOLUTION */
  }