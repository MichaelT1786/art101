// index.js - purpose and description here
// Author: Your Name
// Date:

function addFooter(homeLink){

    let footer = document.createElement("nav");
        footer.className = "content site-links";
        footer.id = "links";

        let arrow = document.createElement("p");
            arrow.textContent = "<= "
        footer.appendChild(arrow);

        let link = document.createElement("a");
            link.href = homeLink;
            link.textContent = "Back to Home Page"
        arrow.appendChild(link);
        

    document.body.appendChild(footer);

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