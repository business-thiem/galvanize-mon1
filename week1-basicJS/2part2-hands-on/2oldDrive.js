function isPersonOldEnoughToDrive(person) {
    // your code here
    /* START SOLUTION */
    return person.age >= 16 ? true : false
    /* END SOLUTION */
}

  var obj = {
    age: 16
  };
  var output = isPersonOldEnoughToDrive(obj);
  console.log(output); // --> true