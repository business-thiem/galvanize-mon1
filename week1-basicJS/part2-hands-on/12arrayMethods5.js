
function removeFromBackOfNew(arr) {
    // your code here
    /* START SOLUTION */
  let arr2 = arr.slice(0, arr.length-1)
  return arr2;
    /* END SOLUTION */
  }


  function removeFromFrontOfNew(arr) {
    // your code here
    /* START SOLUTION */
  let arr2 = arr.slice(1, arr.length)
  return arr2
    /* END SOLUTION */
  }



//see https://stackoverflow.com/questions/70301995/adding-dynamic-values-to-regex for a better in-depth sample
//regex generator: https://regex101.com/ because regex is hardd

  function countCharacter(str, char) {
    // your code here
    /* START SOLUTION */
    // const regex = `/[${char}]/`
    
    let count = 0

    //creates new regexp instance. 1st arg: the regex. 2nd arg: the flag
    const regex = new RegExp(`${char}`, 'g')

     //in case the char doesn't exist
    if(str.match(regex) === null){
        return 0
    } else {
        count = str.match(regex).length
        return count
    }
    



    /* END SOLUTION */
  }

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3