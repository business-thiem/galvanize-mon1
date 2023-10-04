function addFullNameProperty(obj) {
    // your code here
    /* START SOLUTION */
    obj['fullName'] = obj.firstName + ' ' + obj.lastName;
    /* END SOLUTION */
}



var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  addFullNameProperty(person);
  console.log(person.fullName); // --> 'Jade Smith'
