function isPersonOldEnoughToVote(person) {
    // your code here
    /* START SOLUTION */
    return person.age >= 18 ? true : false
    /* END SOLUTION */
  }

  var obj = {
    age: 19
  };
  var output = isPersonOldEnoughToVote(obj);
  console.log(output); // --> true