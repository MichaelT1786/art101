// index.js - lab 15 JS. interacts with pokemon AJAX to get basic info
// Author: Michael Thomas
// Date: 11/25/2024

addFooter("../../index.html");

//showMon referenced outside of function, may use shiny outside another time
let shownMon = 0;
let shiny = 0;

//fucntion to call ajax. takes an input for which pokemon to get the info from
function getPokemon(num){$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + num + "/", 
    data: {
        /* most of the relevant things
        // id: 0, 
        // name: 0, 
        // base_experience: 0, 
        // height: 0, 
        // is_default: 0, 
        // order: 0, 
        // weight: 0, 
        // abilities: [
        //     is_hidden, slot,
        //     ability
        //         name, url
        // ], 
        // forms: [
        //     #
        //         name, url
        // ], 
        // game_indices: [], 
        // held_items: [], 
        // location_area_encounters: 0, 
        // moves: [], 
        // species: {
        //     name, url
        // }, 
        // sprites: {
        //     back_default, 
        //     back_female, 
        //     back_shiny, 
        //     back_shiny_female
        //     front_default, etc.
        //     }, 
        // cries: {}, 
        // stats: [], 
        // types: [type#> slot, type> name, url], 
        // past_types: []
        */
    }, 
    type: "GET", 
    datatype: "json", 
    success: function(data){
        //for buttons
        shownMon = data.id;

        //just for reference
        console.log(data);
        console.log(data.name);

        //storing and playing the cry
        $("#cry").attr("src", data.cries.latest);
        let shownCry = document.getElementById("cry");
        // console.log(shownCry);
        shownCry.play();

        //getting a random shiny chance. ~1/512 are shiny 
        shiny = Math.floor(Math.random()*512);
        //if shiny, show the shiny sprite. else, show the normal sprite
        if (shiny == 0){
            $("#pokepic").attr("src", data.sprites.front_shiny);
        } else {
            $("#pokepic").attr("src", data.sprites.front_default);
        }
        
        //capitalizes first letter of the name and print it
        $("#pokename").html(data.name.charAt(0).toUpperCase()+data.name.slice(1));
        
        //set types & print
        $("#type div").attr("class", "")
        $("#type div").html("");
        $("#type div:first-child").html(data.types[0].type.name.toUpperCase()).attr("class", data.types[0].type.name);
        //if there is no second type, gives 2nd type a special class so it is hidden properly and doesn't offset the first type
        if(data.types.length == 2){
            $("#type div:last-child").html(data.types[1].type.name.toUpperCase()).attr("class", data.types[1].type.name);
        } else {
            $("#type div:last-child").html("").attr("class", "noType");
        }
        
    }, 
    //if error, will say
    error: function(jqXHR, textStatus, errorThrown){
        console.log("Failure!");
        console.log("Error: ", textStatus, errorThrown);
    }
})}

//gets a pokemon on load
getPokemon((Math.ceil(Math.random()*1024))+1);
// getPokemon(1024);

//buttons
$("#random").click(function(){getPokemon((Math.ceil(Math.random()*1024)))});
$("#back").click(function(){
    //special code since mod doesn't work in reverse
    if(shownMon !== 1){
        getPokemon(shownMon- 1)
    } else {
        getPokemon(1025)
    }
});
$("#next").click(function(){getPokemon(((shownMon) % 1025) + 1)});
$("#specific").on('keypress', function(e){
    //if enter key is pressed, loads the specified mon & clears the textbox
    if(e.which === 13){
        getPokemon($("#specific").val());
        $("#specific").val("");
    }
})