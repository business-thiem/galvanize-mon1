document.addEventListener('DOMContentLoaded', function () {
    // Write your code here! Don't forget the above in later lessons.
    let removeNode = document.querySelector('.remove-me');
    let footer = document.querySelector('footer');

    let innerHTMLH1 = `<h1>I have inserted myself into the convo</h1>`
    let pNode = document.querySelector('p');

    removeNode.remove();
    footer.classList.add("galvanize-link")
    footer.setAttribute('href', 'http://galvanize.com/')
    document.body.innerHTML = innerHTMLH1;
    


  })
  