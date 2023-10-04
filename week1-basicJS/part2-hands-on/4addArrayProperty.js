function addArrayProperty(obj, key, arr) {
    // your code here
    /* START SOLUTION */
  obj[key] = arr
    /* END SOLUTION */
  }

  var myObj = {};
  var myArray = [1, 3];
  addArrayProperty(myObj, 'myProperty', myArray);
  console.log(myObj.myProperty); // --> [1, 3]