/*
	For each comment where you see 'EXPLAIN:' add an explanation as to what is happening on the line below. Be as verbose as possible! For the line with `preventDefault`, try clicking the 'Submit' button without it first. Then, comment that code in and see how it changes.
*/

// EXPLAIN: content loads when the event DOMContentLoaded occurs, when the element completely loads on the page, run the function's contents
document.addEventListener('DOMContentLoaded', function () {
    // EXPLAIN: form variable gets the form element
    var form = document.getElementById('myForm')
    // EXPLAIN: 
    form.addEventListener('submit', function (e) {
        // EXPLAIN: prevents 
        e.preventDefault()

      var name = document.getElementById('name')
      var text = name.value

      // EXPLAIN: changes the value of input element to empty string
      name.value = ''
      // EXPLAIN: browser will scroll to the input with name id, and focus it. 
      name.focus()

      // EXPLAIN:
      var prev = document.querySelector('.alert')
      if (prev) {
          // EXPLAIN:
          prev.remove()
      }

      var alert = document.createElement('div')
      alert.className = 'alert alert-info'
      alert.textContent = 'Thank you for your submission, ' + text + '!'

      var row = document.querySelector('form')
      // EXPLAIN:
      row.append(alert)
    })
  })


  //send to 404 when no prevent default because it does actual form submission
  