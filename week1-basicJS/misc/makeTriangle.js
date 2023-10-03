/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// IMPORTANT PERSONAL NOTE: UDACITY wanted something very specific in its string answer check, didn't bother with doing it to their exact solution. Trying to save time and moving foward after I got the concept.

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(size){
    var triStr = ""
    for(let i = 0; i <= size; i++){
        triStr +=  makeLine(i) + "\n"
    }
    return triStr;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));