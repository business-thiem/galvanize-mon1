const isPalindrome = str => {
    // your code here
    let revserseString = str.split('').reverse().join('')
    if(str === revserseString){
        return true
    } else {
        return false
    }
  }