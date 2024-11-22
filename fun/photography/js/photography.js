// index.js - Creating the full set of images
// Author: Michael Thomas
// Date: 10/27/24

/*adds footer
--first parameter to link to home page
*/
addFooter("../../index.html");

/* Photo Grid
-- puts all the wanted images into an array
-- creates children in #all-photos, giving each a photo
--dynamically changes the number of columns to fit screen width
*/
// photo grids for the Collections page
let photos = [
    [//ungrouped

    ], [//sunsets
        "./img/sc-photos/20241004_183700_sunset.jpg",
        "./img/sc-photos/20241006_190612_portercsunset.jpg"

    ], [//campus
        "./img/sc-photos/20241005_122012_koibuild.jpg",
        "./img/sc-photos/20241004_171734_bridgepath.jpg",
        "./img/sc-photos/20241004_171406_baskincorner.jpg",
        "./img/sc-photos/20241004_184104_fairylights.jpg",
        "./img/sc-photos/20241009_103207_crown.jpg",
        "./img/sc-photos/20241009_103730_busystreet.jpg",
        "./img/sc-photos/20241016_103603_fountain.jpg",
        "./img/sc-photos/20241004_183700_sunset.jpg",
        "./img/sc-photos/20241006_190612_portercsunset.jpg"

    ], [//nature
        "./img/sc-photos/20241007_184959_canopy.jpg",
        "./img/sc-photos/20241014_200458_blueflower.jpg",
        "./img/sc-photos/20241016_122041_rocks.jpg",
        "./img/sc-photos/20241004_171734_bridgepath.jpg"

    ], [//night
        "./img/sc-photos/20241014_195218_oneway.jpg",
        "./img/sc-photos/20241016_014400_nightsky.jpg",
        "./img/sc-photos/20241012_185542_bwalksignglow.jpg", 
        "./img/sc-photos/20241014_200458_blueflower.jpg",

    ], [//downtown
        "./img/sc-photos/20241006_163209_downtown.jpg",
        "./img/sc-photos/20241012_150234_construction.jpg",
        "./img/sc-photos/20241012_151251_dreamwheel.jpg",
        "./img/sc-photos/20241012_155954_sidewalkclosed.jpg",
        "./img/sc-photos/20241012_161125_boatbox.jpg",
        "./img/sc-photos/20241012_185542_bwalksignglow.jpg"
    ]
]
let catagories = ["All Photos", "Sunsets", "Campus", "Nature", "Night", "Downtown"];

//replaces the current grid with the specified photos
function setGrid(grid, gridContent) {
    $(grid).empty();
    for (let i = 0; i < gridContent.length; i++) {
        $(grid).append("<img class='photo' src=" + gridContent[i] + "></img>")
    }

}

//trims duplicates from images that appear in multiple catagories and sorts them to set "all photos" as default
setGrid($("#all-photos"), [...new Set(photos.flat())].sort());

//constantly updates the number of columns in the grid based on the available width
upCheck(function () {
    $("#all-photos").css("grid-template-columns", "repeat(" + Math.ceil($("#all-photos").parent().innerWidth()/350) + ", 1fr)")
    
})


/* Catagory select bar
-- makes a spot for each catagory based on photos
-- applies titles based on a seperate var, making it clear which aren't labeled. Could maybe consolidate into photos if you find a way to remove header names from array 
makes it so clicking on an entry*/

//appending each of the catagories. 
for (i = 0; i < photos.length; i++) {
    $("div#catagory-dropdown div.drop-menu").append("<p class='drop-content'>" + catagories[i] + "</p>");
    $(".drop-content:last-child").attr("dropNum", i);
}

$(".drop-butt").click(function () { 
    $(".drop-menu").toggleClass("show")
    $(".drop-butt").toggleClass("show")  
});

//click on menu item
$(".drop-content").click(function(){
    //if click the first item, show all. otherwise, show by catagory.
    if ($(this).attr("dropNum") == 0){
        setGrid($("#all-photos"), [...new Set(photos.flat())].sort());
    } else {
        setGrid($("#all-photos"), photos[$(this).attr("dropNum")].sort());
    }
    //updates button text to reflect catagory
    $("button.drop-butt").html($(this).html());
    //closes menu
    $(".drop-menu").toggleClass("show");
    $(".drop-butt").toggleClass("show"); 
});