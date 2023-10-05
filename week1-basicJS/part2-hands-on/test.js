// function returnValue(value){
//   return value;
// }

// function consoleLogValue(value){
//   console.log(value);
// }

// var myName = returnValue('Frank');
// var myDogsName = consoleLogValue('Tommy Gun');


// // console.log(myDogsName)
// // console.log(myName)


// function sayHelloToWorld(string){
//   return `Hello World, ${string}`;
// }

// let output = sayHelloToWorld('John')
// console.log(output)



// Don't change the function name.
function returnPyramid(height){
  let arr = []
  let str = ''
  
  for(let i = 0; i < height; i++){
    str += '#'
    arr.push(str)
  }

  // console.log(arr)
  return arr;
  
}

returnPyramid(2); //=> ['#','##']
returnPyramid(4); //=> ['#','##','###','####']
returnPyramid(6); //=> ['#','##','###','####','#####','######']