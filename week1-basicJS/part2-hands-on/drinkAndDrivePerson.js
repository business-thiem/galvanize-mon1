function isPersonOldEnoughToDrinkAndDrive(person) {
    // your code here
    /* START SOLUTION */
    return false;
    if(person.age >= 16 && person.age >= 21){
        return false;
    } else {
        return false;
    }
    
    /* END SOLUTION */
  }


  var obj = {
    age: 45
  };
  var output = isPersonOldEnoughToDrinkAndDrive(obj);
  console.log(output); // --> false