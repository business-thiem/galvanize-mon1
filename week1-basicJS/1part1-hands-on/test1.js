let facebookProfile = {
    name: 'Andrew', 
    friends: 5, 
    messages:['hello','hi friend','goodbye'], 
    postMessage: (message) => { messages.push(message) },
    deleteMessage: function(obj){
        this.messages.pop()
    }
}


// function postMessage(obj){
//     messages.push(newMsg)
// }

// function deleteMessage(obj){
//     //delete message
// }
