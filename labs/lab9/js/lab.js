// index.js - JS for lab 9. appends buttons to each of the sections with the ability to toggle "special" class for each
// Author: Michael Thomas
// Date: 11/1/24
//prereqs: jQuerey, site.css, lab.css?

// Constants

// Functions

addFooter("../../index.html");


//appends buttons to all divs with the class "content" (all of the main sections of the page)
$("div.content").append("<button class='toggle-special'>Let's make this section <span class='favcolor'>Fancy</span></button>");
//gives all buttons the mCount attribute with a value of 0
$("button.toggle-special").attr("mCount", 0);

$("button.toggle-special").click(function () {
  //just tells console what is being modified. Used in testing to make sure i was actually targeting the right object
  console.log($(this).parent());

  //array of the messages the button cycles through
  let message = [
    //start (norm)
    "Let's make this section <span class='favcolor'>Fancy</span>",
    //fancy
    "Too <span class='favcolor'>Fancy</span>! Let's take a step back",
    //norm
    "Ahh, much better. This element <i>definitly</i> doesn't need to be <span class='favcolor'>Fancy</span>",
    //fancy
    "We literally <i>just</i> realized this was a bad idea: It's too damn <span class='favcolor'>Fancy</span>!",
    //norm
    "Ok. Thank you for changing it back. <b>PLEASE</b>! For all that is good in this world, DON'T MAKE THIS <span class='favcolor'>FANCY</span>!",
    //fancy
    "I'm just disappointed in you. Seriously. This is the <b>3RD TIME</b> you've made this <span class='favcolor'>Fancy</span>. Please tell me you've learned your lesson.",
    //norm
    "There. Don't these browns look so nice? You've see them everywhere on the page for a reason: The <span class='favcolor'>Fancy</span> fuschia is nice <i>in moderation</i>. Let's leave it like this, ok?",
    //fancy (end)
    "That's it. I give up. I'm done. I'm not even mad, just done. I hope you like this <span class='favcolor'>Fancy</span> look because I am not going to go back anymore. I quit."
  ]

  //adds one to the mCount attribute & reports updated mCount to console. 
  $(this).attr("mCount", parseInt($(this).attr("mCount")) + 1);
  console.log($(this).attr("mCount"));

  //deletes the button upon giving up
  if ($(this).attr("mCount") == 8) {
    $(this).remove()
  }

  //updates message based on mCount
  $(this).html(message[$(this).attr("mCount")]);

  //toggles if the section has the special class or not
  $(this).parent().toggleClass('special');
});