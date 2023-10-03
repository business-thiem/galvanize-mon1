// Write a function called sayHello.
// sayHello takes one input parameter, the language for the greeting.
// sayHello returns a greeting following the rules defined above.

function sayHello(lang){
    switch(lang){
        case 'English':
            return 'Hello'
            break;
        case 'French':
            return 'Bonjour'
            break;
        case 'Spanish':
            return 'Hola'
            break;
        default: 
            return (`Sorry, I do not speak ${lang}.`)
    }
}

var output = sayHello('German')

console.log(output)