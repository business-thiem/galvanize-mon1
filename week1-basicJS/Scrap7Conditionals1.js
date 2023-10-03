function isOldEnoughToVote(age) {
    // your code here
    /* START SOLUTION */
      return age >= 18 ? true : false
    /* END SOLUTION */
  }

  console.log(15, isOldEnoughToVote(15))
  console.log(25, isOldEnoughToVote(25))