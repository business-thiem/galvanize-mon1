

let url = `https://jsonplaceholder.typicode.com/todos`


// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))

// ---------------------------------------
// fetch(url).then(function(res){
//     return data = res.json()
// }).then(function(data){
//     console.log(data)
// })


// ASYNC Await is newer and better
async function fetchAsyncData() {
    let data;

    try {
        let response = await fetch(url)
        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
  }
  
  // Calling the async function
  fetchAsyncData();
  
  
  
// console.log(data)



// ask garrett by pass by reference and pass by value