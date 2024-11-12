// index.js - js for lab 11's form submission
// uses jquery
// Author: Michael Thomas
// Date: 11/11/24

// Constants

// Functions

addFooter("../../index.html");

//function that messes with the input text
function magicName(name){
    //takes the input and breaks two halves out of it, ignoring the first character
    let nameStart = name.slice(1, Math.floor(name.length / 2) + 1);
    let nameEnd = name.slice((Math.floor(name.length / 2) + 1));
    console.log(nameStart);
    console.log(nameEnd);

    //outputs the input with its first letter capitalized and the rest sorted and lowercased
    return name.charAt(0).toUpperCase() + 
    nameStart.split('').sort().join('').toLowerCase() + 
    nameEnd.split('').sort().join('').toLowerCase();
}

//click listener for submit button
$('#submit').click(function(){
    //gets username, then clears the input field
    let newName = magicName($("#username").val());
    $("#username").val("");
    
    // if no text was put in the field, does a little thing. Otherwise, simply presents the magicName'd name 
    if (newName == ""){
        $("#output").html("<div><p>Behold, <h2 id='magic-name'>" + "..." + "!</h2></p></div>");
        $("#username").attr("placeholder", "Umm, name?");
    } else {
        //prints out the new name
        $("#output").html("<div><p>Behold, <h2 id='magic-name'>" + newName + "!</h2></p></div>");
        $("#username").attr("placeholder", "Wow, lovely name!");
    }
})

//resets the placeholder text when you click on the input field
$('#username').focus(function(){
    $("#username").attr("placeholder", "What's your name?")
})