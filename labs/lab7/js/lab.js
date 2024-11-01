// lab.js - does the whole sort username thing for lab 7
// Author: Michael Thomas
// Date: 10/28/24

// Constants

// Functions

addFooter("../../index.html");

/* Username Sort
-- prompt user to input name
-- sort name alphabetically
-- print sorted username
*/
function sortUsername() {
  //creates prompt with text entry
  //entry becomes userName value
  let userName = window.prompt("Heyo! What's your name? Not like I know it already or anything...");
  console.log("userName: " + userName);

  //turns userName into array
  //sorts array
  //recombines array into string
  sortName = userName.split('').sort().join('');
  console.log("sortName: " + sortName);

  //function returns sortName
  return sortName;
}

$("#username").append("<p>Wow, " + sortUsername() + " huh? That's a pretty cool name!")
