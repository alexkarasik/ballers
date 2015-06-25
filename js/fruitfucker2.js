$(document).ready(function() {
  var fruitUrls = ['http://www.naturipefarms.com/wp-content/uploads/2012/04/Blueberry.png', 
                 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana21.jpg?a1d5ed',
                 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg',
                 'http://pngimg.com/upload/kiwi_PNG4035.png'];

  function derp(number) {
    return function() { alert("You clicked button #" + number); }
  }
  
  // this is the original code
  var fuckyou = function() {
    for (var i = 0; i < fruitUrls.length; i++) {
      $('button#' + i).click(function() {
        alert("You clicked button #" + i);
      })
    }
  }
  
  // this is the corrected code
  var fuckyou2 = function() {
    for (var i = 0; i < fruitUrls.length; i++) {
      $('button#' + i).click(derp(i));
    }
  }
  
  /** Why fuckyou2() works and fuckyou() doesn't **/
  // Variables within closures are bound to their parent function by reference.
  // This means that variables in closures assume the value of the variable
  // in their parent function that they refer to.
  //
  // Furthermore, a variable within a closure won't assume a value until the
  // function is actually run.
  //
  // Line 16 of this file binds an anonymous function to the click event of the
  // button, but it does not run the function. Therefore the reference variable "i"
  // inside the anonymous function on line 17 will not assume a value until the user
  // has clicked the button. At the point in time, the for loop has completed, and
  // the current value of "i" is 4. All of the buttons on the page are essentially
  // being told the same thing thing: wait and see what the value of the variable "i"
  // in the for loop is at the moment the user clicks the button. Therefore all
  // the buttons display the message "You clicked button #4".
  // 
  // In fuckyou2(), we do not pass an anonymous function to the click() method,
  // and thus no closure is created. So, all the buttons are being told different
  // things. We are still binding an anonymous function to the click event of the
  // button, as we did in fuckyou(). The difference this time is that the contents
  // of each anonymous function are now different.
  //
  // To illustrate:
  //
  // When i = 0, derp() returns an anonymous function that looks like this:
  //
  //   function() { alert("You clicked button #0"); }
  //
  // and binds that anonymous function to the click event of the button with
  // the id="0" attribute.
  // When i = 1, derp() returns an anonymous function that looks like this:
  //
  //  function() { alert("You clicked button #1"); }
  //
  // and binds that anonymous function to the click event of the button with
  // the id="1" attribute.
  // 
  // etc....
  //
  // Whereas in fuckyou(), on every iteration of the for loop, an anonymous
  // function that looks like this:
  //
  //   function() { alert("You clicked button #" + i); }
  //
  // is bound to each button. And since the variables within an anonymous
  // function are bound by reference to its parent function. The value of "i"
  // in each one of these anonymous functions assumes the value of "i" in the
  // for loop at that instant. The for loop has long since completed all its
  // iterations, and therefore the variable "i" in each of the anonymous functions
  // which are bound to the buttons' click() methods assume the value "4".
  
  fuckyou()
  
  
  
  
  
})


