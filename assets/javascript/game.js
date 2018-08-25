var gameRunning = false;
var wins = 0;
var losses = 0;
var numberCurrent = 0;
var numberGoal;
var topaz;
var diamond;
var ruby;
var sapphire;


// new game
$("#new-game").click(function () {
    gameRunning = true;
    $("#win-lose").empty();
    numberGoal = (Math.floor(Math.random() * 101) + 19);
    console.log("Goal: " + numberGoal)
    topaz = (Math.floor(Math.random() * 12) + 1);
    console.log("Topaz: " + topaz);
    diamond = (Math.floor(Math.random() * 12) + 1);
    console.log("Diamond: " + diamond);
    ruby = (Math.floor(Math.random() * 12) + 1);
    console.log("Ruby: " + ruby);
    sapphire = (Math.floor(Math.random() * 12) + 1);
    console.log("Sapphire: " + sapphire);
    $("#number-goal").text("The number to reach is: " + numberGoal);
    numberCurrent = 0;
    $("#number-current").text("Your current number is: " + numberCurrent);

})

// while (gameRunning) {

// wins
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);


//  else {
// return false;
// }

$("#topaz").click(function () {
    console.log("Topaz");
    numberCurrent = (numberCurrent + topaz);
    $("#number-current").text("Your current number is: " + numberCurrent);
    if (numberCurrent == numberGoal) {
        wins++;
        $("#win-lose").text("KABLAM!! Stellar work!");
        $("#wins").text("Wins: " + wins);
        gameRunning = false;
    } else if (numberCurrent >= numberGoal) {
        losses++;
        $("#win-lose").text("The laser overheated! That's one major city gone, but there are still others to save!");
        $("#losses").text("Losses: " + losses);
        gameRunning = false;
    }
})

$("#diamond").click(function () {
    console.log("Diamond");
    numberCurrent = (numberCurrent + diamond);
    $("#number-current").text("Your current number is: " + numberCurrent);
    if (numberCurrent == numberGoal) {
        wins++;
        $("#win-lose").text("KABLAM!! Stellar work!");
        $("#wins").text("Wins: " + wins);
        gameRunning = false;
    } else if (numberCurrent >= numberGoal) {
        losses++;
        $("#win-lose").text("The laser overheated! That's one major city gone, but there are still others to save!");
        $("#losses").text("Losses: " + losses);
        gameRunning = false;
    }
})

$("#ruby").click(function () {
    console.log("Ruby");
    numberCurrent = (numberCurrent + ruby);
    $("#number-current").text("Your current number is: " + numberCurrent);
    if (numberCurrent == numberGoal) {
        wins++;
        $("#win-lose").text("KABLAM!! Stellar work!");
        $("#wins").text("Wins: " + wins);
        gameRunning = false;
    } else if (numberCurrent >= numberGoal) {
        losses++;
        $("#win-lose").text("The laser overheated! That's one major city gone, but there are still others to save!");
        $("#losses").text("Losses: " + losses);
        gameRunning = false;
    }
})

$("#sapphire").click(function () {
    console.log("Sapphire");
    numberCurrent = (numberCurrent + sapphire);
    $("#number-current").text("Your current number is: " + numberCurrent);
    if (numberCurrent == numberGoal) {
        wins++;
        $("#win-lose").text("KABLAM!! Stellar work!");
        $("#wins").text("Wins: " + wins);
        gameRunning = false;
    } else if (numberCurrent >= numberGoal) {
        losses++;
        $("#win-lose").text("The laser overheated! That's one major city gone, but there are still others to save!");
        $("#losses").text("Losses: " + losses);
        gameRunning = false;
    }
})

//GAme is running

// 4x event listeners that look for clicks

// function(x) runs the game
//Check if game is running before doing anything
// the business
// add x to total
// check if win
// check if loss
// shut down game

// losses

// }




//win-lose

// number-goal

// number-current

// topaz

// diamond

// ruby

// sapphire