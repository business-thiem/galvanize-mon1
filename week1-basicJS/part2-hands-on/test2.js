function fizzBuzzArray(input) {
    // Write a function that...

    let arr = []
    let str = ''

    for(let i = 1; i <= input; i++){
        str = ''
        if(i % 3 === 0 && i % 5 !== 0){
            str = 'fizz'
            arr.push(str)
        } else if(i % 5 === 0 && i % 3 !== 0){
            str = 'buzz'
            arr.push(str)
        } else if(i % 3 === 0 && i % 5 === 0) {
            str = 'fizzBuzz'
            arr.push(str)
        } else {
            arr.push(i)
        }
    }
    // console.log(arr)
    return arr;

}

fizzBuzzArray(15); //=> [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzBuzz']
fizzBuzzArray(100); //=> [1,2,'fizz', ..., 97, 98, 'fizz','buzz']