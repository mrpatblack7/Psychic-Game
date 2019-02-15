// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var previousGussess = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsDisply = document.getElementById("wins");
var LossesDisplay = document.getElementById("losses");
var guessesLeftDisplay = document.getElementById("guessesLeft");
// letters that are displayed
var guessLettersDisplay = document.getElementById("guessesAttempted");
var userInputDisplay = document.getElementById("userInput");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();
   

    //  "else if" instead of lots of if statements.
    if(userGuess === computerGuess){
        wins ++;
        guessesLeft <= 9;
        previousGussess = [];
        
    }
    if(userGuess != computerGuess){
        guessesLeft --;
    }

    if(guessesLeft === 0){
        guessesLeft === 9;
        losses ++;
        previousGussess = [];

    }
    
    previousGussess.push(userGuess);



    winsDisplay.innerHTML = "wins: " + wins;
    LossesDisplay.innerHTML = "loses: " + losses;
    guessesLeftDisplay.innerHTML ="guesses: " + guessesLeft;
    guessLettersDisplay.innerHTML="guessesAttempted: " + previousGussess;



};











