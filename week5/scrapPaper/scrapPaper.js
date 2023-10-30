// https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}


let jsonData;



initEventListeners()

// Utility functions ---------------------------------------------
async function getBookData(searchText){ 
    let bookapi = `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}`
    let res = await fetch(bookapi);
    jsonData = await res.json();
    console.log(jsonData)

    renderBooks(jsonData)
}

function initEventListeners(){
    const userSearch = document.querySelector(`#userSearch`)
    const searchBtn = document.querySelector(`#searchBtn`)
    // using enterbtn
    userSearch.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
            getBookData(userSearch.value)
        }
    })
    searchBtn.addEventListener('click', (e) => {
        getBookData(userSearch.value)
    })
}


function renderBooks(obj){
    const dataCtn = document.querySelector(`#dataCtn`)
    const books = obj.items;
    let bookHTML = ``

    //empty contents
    dataCtn.innerHTML = '';

    // obj.volumeInfo.imageLinks.thumbnail
    let volumeInfo = '';

    books.forEach((book,index) => {
        
        volumeInfo = book.volumeInfo;

        // console.log(book.volumeInfo.imageLinks.thumbnail)

        bookHTML += `
            <img src="${volumeInfo.imageLinks.thumbnail}">
            <h4>${volumeInfo.title}</h4>
            <p>${volumeInfo.description}</p>
            `
    })
    
    dataCtn.innerHTML = bookHTML;

    // dataCtn.append(bookHTML)
}


