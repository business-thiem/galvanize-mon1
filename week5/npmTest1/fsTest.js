import fs from 'fs'


let data = fs.readFileSync('./fsTestRead.txt', 'utf-8')
console.log(data)


fs.appendFile('./dogs.txt', 'woof!', (err) => {
    if(err){
        console.log(err)
    }
    console.log("append success")
})