// index.js - Creates a FizzBuzzBoom list with 200 items
// Author: Michael Thomas   
// Date: 11/18/24

// Constants

// Functions

addFooter("../../index.html");

/*
function to create a fizz grid
-- fizzName: name attribute of the table. rows are fizzName#
-- total: the max number to apply cases to. starts at 0
-- columns: the number of columns in the grid
-- target: the DOM element where the table is inserted
-- cases: an array. each item of the array is an array with the number to check for multiples of and the phrase to add to the output
*/
function makeFizz(fizzName, total, columns, target, cases) {
//--- Structure & Semantics

    // var used to store all of the cases for a number
    let output = 0;
    //array that stores all of the ouputs to be returned at the end
    let all = []


    //creates the table
    target.append("<div class='fizzTable' name = " + fizzName + "></div>");
    // console.log(target);
    // console.log(table);

    //adds a number of rows based on columns
    $("[name=" + fizzName).css("grid-template-columns", "repeat(" + columns + ", auto)");
    // console.log($("[name=" + fizzName))


    //has the subheader display the range of numbers that the cases are applied to
    $("#title").append(total + ":")

    //adds the list of cases to the results section
    for (i = 0; i < cases.length; i++) {
        $("#cases").append("<tr><td><p>" + cases[i][0] + ": " + cases[i][1] + "</p></td></tr>")
    }


//--- Filling the grid

    //goes through the "total" numbers from 1 to total. Ignores 0 because it just gets every case and looks ugly. Includes the number "total"
    for (let num = 1; num <= total; num++) {
        //resets output for each number
        output = "";

        //goes through all cases
        for (i = 0; i < cases.length; i++) {
            if (Math.ceil((num % cases[i][0]) / cases[i][0]) == 0) { //returns a 0 if the number is divisible by the given number from cases
                //adds the corresponding phrase to the output
                output += cases[i][1];
            }
        }
        //if none of the cases are true, then output will be blank, so outputs the number
        if (output == "") {
            output = num;
        }

        // adds output to the current row
        target.find("[name=" + fizzName).append("<div><p>" + output + "</p></div>");
        //console.log(output);
        //console.log(fizzName + Math.floor(num / columns));

        //adds output to all
        all.push(output);
    }

    //returns the full list as an array for additional prodding if needed
    return all;
}

//logs "all" to the console while it makes the grid
console.log(makeFizz("mainFizz", 200, 8, $("#output"), [
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Boom"],
    [9, "Bop"],
    [11, "Zip"],
    [13, "Zap"],
    [17, "Zop"]
]))