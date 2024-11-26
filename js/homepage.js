// index.js - JS for homepage. updates content based on device width
// Author: Michael Thoams
// Date: 11/4/2024

//checks if About Me is pushed down by main-photo. 
//Currently happens at 516 pixels
upCheck(function(){
    if ($(window).innerWidth() <= 516) {
        //centers
        $("img#main-photo").css("float", "none");
        $("img#main-photo").css("margin-left", "auto");
        $("img#main-photo").css("margin-right", "auto");
        $("img#main-photo").css("max-width", $("img#main-photo").parent().innerWidth());
        //console.log("center");
    } else {
        $("img#main-photo").css("float", "right");
        //console.log("right");
    }
});

//creates the list of lab links
let labs = [
    "Getting Started", 
    "HTML and CSS Starter", 
    "File Structure and File Transfer", 
    "Pseudocoding and Problem-Solving", 
    "Data Types and Variables", 
    "Arrays and Objects", 
    "Functions", 
    "Anon Functions and Callbacks", 
    "Libraries and jQuery", 
    "JavaScript For the Web", 
    "JavaScript Events and Forms", 
    "Conditionals", 
    "Loops", 
    "Debugging, Tools & Strategies", 
    "AJAX"
]

for (let i=0; i<labs.length; i++){
    $("#lab-links").append("<tr><td>Lab " + (i+1) + " - <a href='labs/lab" + (i+1) + "/index.html'>" + labs[i] + "</a></td></tr>")
}