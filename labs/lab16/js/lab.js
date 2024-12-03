// index.js - uses AJAX to get images from NASA's EPIC API
// Author: Michael Thomas
// Date: 12/2/24

addFooter("../../index.html");

$.ajax({
    url: "https://api.nasa.gov/EPIC/api/natural", 
    data: {
        // api key obtained from NASA
        api_key: "QE8ln4u4a8E1jk2er2rXFmi6eFdQFlMiP8tLpgzv"
    }, 
    type: "GET", 
    dataType: "json", 
    success: function(data){
        //only want to work with the most recent image
        //sets pic to the first image's data
        let pic = data[0];
        console.log(pic);

        //reformats pic.date, replacing the hyphens with slashes so it works in the image src
        pic.imgDate = (pic.date.slice(0, 10).replace("-", "/").replace("-", "/"));
        console.log(pic.imgDate)

        //modifying the DOM elements to get what I want
        $("#date").html(pic.imgDate);
        //have to manually format the src link
        $("#pic").attr("src", "https://api.nasa.gov/EPIC/archive/natural/" + pic.imgDate + "/png/" + pic.image + ".png?api_key=QE8ln4u4a8E1jk2er2rXFmi6eFdQFlMiP8tLpgzv");
        $("#caption").html(pic.caption);
        $("#coords td:first-child p").html("Latitude: " + pic.centroid_coordinates.lat);
        $("#coords td:last-child p").html("Longitude: " + pic.centroid_coordinates.lon)

    }, 
    error: function(){

    }
})