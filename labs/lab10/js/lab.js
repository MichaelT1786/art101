// index.js - JS for lab 10
// Author: Michael Thoams
// Date: 11/7/2024

// Constants

// Functions

addFooter("../../index.html");

/*generates a random string of lorem ipsum by: 
-- generating a random length. 
--picking one of the lines at random
-- generating a random starting point
 extracting that from the string

other things I could have it do
-- remove and reinsert spaces and punctuation
*/
function randomText() {
  let lorem = ["Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi neque luctus id aliquam cubilia primis ridiculus. Phasellus egestas curae ut morbi volutpat nulla molestie sapien maximus. Morbi dolor rutrum vivamus accumsan penatibus ipsum potenti feugiat. Inceptos accumsan sollicitudin turpis ex quisque mus semper cubilia consequat. Montes nunc lacus vel consequat sed hac est.",
    "Cubilia sollicitudin at magna ornare ullamcorper facilisi. Nunc gravida purus inceptos ipsum congue potenti facilisis inceptos ullamcorper. Nunc curae id dolor, dictumst curabitur habitasse. Condimentum diam blandit imperdiet rutrum volutpat, sollicitudin ipsum. Augue porta gravida aenean ad tincidunt ornare suspendisse! Phasellus duis iaculis ornare ridiculus sed interdum leo sollicitudin. Sit nostra luctus platea lectus ridiculus praesent aliquet. Pretium cras id potenti mauris tempor.",
    "Dictum sed rhoncus est, fringilla hendrerit justo aliquam. Pharetra imperdiet eleifend et arcu dis vulputate primis tincidunt varius. Cras fermentum purus finibus placerat egestas consequat dui consequat. Ullamcorper magnis luctus ac dictumst non eleifend sodales. Placerat ut velit lobortis rutrum massa; sapien posuere tortor. Tristique orci lobortis netus dis elementum elit aliquet tincidunt. Lacinia porttitor cursus imperdiet aptent, sem id velit. Congue leo fusce pharetra elit fames praesent sociosqu interdum."];

  // min & max for text length
  let caps = [3, 12];
  /*generates random number between min & max
  -- math.random * max - min... + min    */
  let length = Math.floor(Math.random() * (caps[1] - caps[0])) + caps[0]
  console.log("length: " + length);

  //picks a random line from the lorem array
  let line = Math.floor(Math.random() * lorem.length)
  console.log("line: " + line);

  //selects a starting point. 
  //-- max is length characters away from the length of the lorem item to ensure you get the full length you rolled
  let start = Math.floor(Math.random() * (lorem[line].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").length - length));
  console.log("start: " + start)

  //gets the string, filters out any punctuation and spaces, and converts it all to lower case. 
  let rawText = lorem[line].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").slice(start, start + length).toLowerCase();
  console.log(rawText.charAt(0).toUpperCase());
  rawText.charAt(0).toUpperCase();
  return rawText.charAt(0).toUpperCase() + rawText.slice(1);
}

//click listener for button
$("#g-button").click(function(){
  //adds text to output
  $("#spell").html("<p>" + randomText() + "!</p>")
  //gives each spell random underline color
  $("#spell p").css("text-decoration-color", "rgba(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ", 0.8)");
})