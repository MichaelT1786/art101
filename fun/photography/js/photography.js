// index.js - Creating the full set of images
// Author: Michael Thomas
// Date: 10/27/24



/* putting together the photo grid
-- puts all the wanted images into an array
-- creates children in #all-photos, giving each a photo

*/
function makeGrid(grid, gridContent) {
    for (let i = 0; i < gridContent.length; i++) {
        let photo = document.createElement("img");
                photo.className = "photo";
                photo.src = gridContent[i];

        grid.appendChild(photo);
    }
     
}

// photo grid for the Collections page
let mainCollection = [
    //sunsets
    "./img/sc-photos/20241004_183700_sunset.jpg", 
    "./img/sc-photos/20241006_190612_portercsunset.jpg", 

    //campus
    "./img/sc-photos/20241005_122012_koibuild.jpg", 
    "./img/sc-photos/20241004_171734_bridgepath.jpg", 
    "./img/sc-photos/20241004_171406_baskincorner.jpg", 
    "./img/sc-photos/20241004_184104_fairylights.jpg", 
    "./img/sc-photos/20241009_103207_crown.jpg", 
    "./img/sc-photos/20241009_103730_busystreet.jpg", 
    "./img/sc-photos/20241016_103603_fountain.jpg", 

    //nature
    "./img/sc-photos/20241007_184959_canopy.jpg", 
    "./img/sc-photos/20241014_200458_blueflower.jpg", 
    "./img/sc-photos/20241016_122041_rocks.jpg", 

    //nightwalks
    "./img/sc-photos/20241014_195218_oneway.jpg", 
    "./img/sc-photos/20241016_014400_nightsky.jpg", 

    //downtown
    "./img/sc-photos/20241006_163209_downtown.jpg", 
    "./img/sc-photos/20241012_150234_construction.jpg", 
    "./img/sc-photos/20241012_151251_dreamwheel.jpg", 
    "./img/sc-photos/20241012_155954_sidewalkclosed.jpg", 
    "./img/sc-photos/20241012_161125_boatbox.jpg", 
    "./img/sc-photos/20241012_185542_bwalksignglow.jpg", 

];
makeGrid(document.getElementById("all-photos"), mainCollection.sort());

console.log(window.innerWidth);

function checkScreenSize(grid) {
    if (window.innerWidth <= 500) { //gives mobile only 1 column
        grid.style.gridTemplateColumns = "auto";
        grid.style.rowGap = "3%";
    } else if (window.innerWidth < 1230) {
        grid.style.gridTemplateColumns = "auto auto auto";
    } else {
        grid.style.gridTemplateColumns = "auto auto auto auto auto";
    }
};
let checkScreenInterval = window.setInterval(checkScreenSize(document.getElementById("all-photos")), 100);