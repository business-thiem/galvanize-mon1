var person = {
    firstName: "Homer",
    middleName: "Jay",
    lastName: "Simpson"
  };
  
  // "Homer"
  // "Jay"
  // "Simpson"
  for (var key in person) {
    console.log(person[key]);
  }
  
  // firstName
  // middleName
  // lastName
  for (var key in person) {
    console.log(key);
  }