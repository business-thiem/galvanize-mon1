// link to JS fiddle: https://jsfiddle.net/thiemDev/ae3fjr91/3/

/*
	For each comment where you see 'EXPLAIN:' add an explanation as to what is happening on the line below. Be as verbose as possible! For the line with `preventDefault`, try clicking the 'Submit' button without it first. Then, comment that code in and see how it changes.
*/

// EXPLAIN: content loads when the event DOMContentLoaded occurs, when the element completely loads on the page, run the function's contents
document.addEventListener('DOMContentLoaded', function () {
    // EXPLAIN: form variable gets the form element
    var form = document.getElementById('myForm')
    // EXPLAIN: form listens for submit event and passes the event info into its function expression.
    form.addEventListener('submit', function (e) {
        // EXPLAIN: prevents the default of the e (event), which is the form submission. 
        e.preventDefault()

      var name = document.getElementById('name') 
      var text = name.value

      // EXPLAIN: changes the value of input element to empty string
      name.value = ''
      // EXPLAIN: browser will scroll to the input with name id, and focus it. 
      name.focus()

      // EXPLAIN: never gets selected becaues the div with the class alert doesn't exist when this code gets executed, so prev is null. 
      var prev = document.querySelector('.alert')
      if (prev) {
          // EXPLAIN: prev is null, so it removes nothing. Otherwise in the case this code does execute, then it removes the div.alert element. 
          prev.remove()
      }

      var alert = document.createElement('div')
      alert.className = 'alert alert-info'
      alert.textContent = 'Thank you for your submission, ' + text + '!'

      var row = document.querySelector('form')
      // EXPLAIN: alert div is appended inside the form element with the text 'TY 4 ur submission ${text}'  
      row.append(alert)
    })
  })


  //send to 404 when preventDefault is disabled because it does actual form submission, but it has no action=${url to send to} and no ${HTTP request type}
  