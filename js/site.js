// index.js - purpose and description here
// Author: Your Name
// Date:

function addFooter(homeLink){

    let footer = document.createElement("nav");
        footer.className = "content site-links";
        footer.id = "links";

        let link = document.createElement("a");
            link.href = homeLink;
            link.textContent = "<= Back to Home Page"
        footer.appendChild(link);
        

    document.body.appendChild(footer);

}