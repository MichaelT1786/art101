// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

addFooter("../../index.html");

//list of houses. each gets name, class
//could probably do in a more english-friendly manner with objects
let houses = [
    ["Gryffindor", "grf"], 
    ["Slytherin", "sly"], 
    ["Ravenclaw", "rav"], 
    ["Hufflepuff", "huf"]
]

//takes an input and gets a number between one and four
//returns the corresponding array from houses to be referenced
//--currently uses mod in a kind of cheap way, but it works
function sortingHat(){
    let input = $("#input").val()
    return houses[input.length % 4];
}

//click listener for button
//logs house to console
//replaces html in output div with the results
$("#button").click(function(){
    console.log(sortingHat()[0])
    // item 0 is house name, 1 is class
    $("#output").html("<div class=" + sortingHat()[1] + "><p>" + sortingHat()[0] + "</p>");
})