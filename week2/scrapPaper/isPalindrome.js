const isPalindrome = str => {
    // your code here
    let revserseString = str.split('').reverse().join('')
    return str === revserseString ? true : false
  }