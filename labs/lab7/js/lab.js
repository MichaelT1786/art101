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

//inserts an element. currently only using it to add text elements. Rooom to experiment
//target: html element that is getting the text added into it
//type: the tag being used (p, h1, etc)
//text: what text is being added
function addText(target, type, text) {
  console.log("target: " + target);
  console.log("type: " + type);
  console.log("text: " + text);

  //creates a block based on type
  let block = document.createElement(type);
  console.log("block: " + block);

  //adds text to block
  block.innerText += text;

  //appends block to target
  target.appendChild(block);

  //returns the added
  return target.lastChild;
}

addText(
  document.getElementById("username"), 
  "p", 
  "Wow, " + sortUsername() + " huh? that's a pretty cool name! "
);