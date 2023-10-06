function getLengthOfThreeWords(word1, word2, word3) {
    // your code here
    /* START SOLUTION */
    // YES this is complicated on purpose. It is to challenge myself to see if I can make it dynamic no matter how many words there are. 
    let arr = [];
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        arr.push(arguments[i])
    }
    arr.forEach(element => {
        sum += element.length
    })

    return sum
    /* END SOLUTION */
  }

  var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14