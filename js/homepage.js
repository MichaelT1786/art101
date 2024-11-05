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