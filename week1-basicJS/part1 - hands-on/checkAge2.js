function checkAge(name, age) {
    // your code here
    /* START SOLUTION */
    if(age >= 21){
       return  `Welcome, ${name}!`
    } else if (age === 21){
        return name
    } else {
        return `Go home, ${name}!`
    }
    /* END SOLUTION */
  }
  
  console.log(checkAge('steve', 22))