


  /*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function (num){
    let str = "!";
    for(let i = 0; i < num; i++){
        str = "ha"+str;
    }
    return str
} /* finish the function expression */

console.log(laugh(10));




// EXAMPLES BELOW ******************************************************************************************************************

// ANNOYMOUS FUNCTION inline

function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // call the movies function, pass in the function and name of movie
  movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Finding Nemo");


// ANNOYMOUS FUNCTION full



  // function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  

  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);