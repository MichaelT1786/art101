// index.js - purpose and description here
// Author: Your Name
// Date:

function addFooter(homeLink){
    $("body").append("<p class='content site-links' id='links'><= <a href=" + homeLink +  ">Back to Home Page</a></p>");
}

//upCheck function: for checking a function repeatedly as the site is running
//does have to contain a function
function upCheck(func) {
    $(document).ready(
        setInterval(func, 1 /* contained function run every 0.001s*/)
    )
}