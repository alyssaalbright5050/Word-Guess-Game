//Variables that set initial word guess game

var bandsArray = ["madonna", "queen", "poison", "blondie", "bonjovi", "motley crue", "aerosmith", "rem", "metallica"];
var bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];
var bandsArray = bandChoice.split(""); //Splits the word into individual letters
var wins = 0;
var losses = 0;
var wordChoice = bandsArray[bandChoice];
let userGuess;
let alreadyGuessed = [];
var prevGuessesDisplay = document.getElementById("prevGuesses");
console.log(document.getElementById("userProgress"));
var guessesLeftDisplay = document.getElementById("guessesleft");
var guessesRemaining = 12;


var reset = function () {
    bandChoice = bandsArray[Math.floor(Math.random() * bandsArray.length)];
    guessesRemaining = 12;
    alreadyGuessed = [];
    console.log(prevGuessesDisplay);
    prevGuessesDisplay.textContent = null;
}

var winning = function () {
    wins++;
    document.getElementById("wins").textContent;
    reset();
}

var losing = function () {
    losses++;
    document.getElementById("losses").textContent;
    reset();
}

var play = function () {

    // if userGuess is !NOT included in the lettersGuessed already Array,
    if (!alreadyGuessed === userGuess) {
        
        // then loop through all items in the wordChoice array of letters,
            for (let i = 0; i < wordChoice.length; i++) {

                // and IF a character in position [i] in wordChoice matches the userGuess character
                if (wordChoice[i] === userGuess) {

                    // then change the underscore in position [i] in the wordArray of blanks to the userGuess character
                    // this uses String.replace() to replace the String value of "_" to "A" in the wordArray element
                    wordArray[i] = wordArray[i].replace(/_/g, userGuess);

                    // and then copy wordArray values into independent wordDisplay Array
                    wordDisplay = wordArray.slice();

                    // and then convert the wordDisplay Array into a space-separated String
                    wordDisplay = wordDisplay.join(" ");

                    // and then write updated wordDisplay String to the page
                    document.getElementById("theWord").textContent = (wordDisplay);

                    if (!wordDisplay.includes("_")) {
                        
                        winning();

                    } else {
                        // do nothing
                        return;
                    }

                } else {

                    if (!lettersGuessed.includes(" " + userGuess)) {

                        // .push the unmatched userGuess onto the end of the lettersGuessed array
                        lettersGuessed.push(" " + userGuess);
                        // and write the new value of lettersGuessed to the page
                        document.getElementById("theGuesses").textContent = (lettersGuessed);
                        // and decrement the amount of guessesRemaining by 1
                        guessesRemaining = guessesRemaining - 1;
                        document.getElementById("guessesleft").textContent = (guessesRemaining); // write to page

                        if (guessesRemaining < 1) {
                            // reset to a new game
                            reset();

                        } else {
                            // do nothing
                            // return;
                        }
                    } else {
                        // do nothing
                        // return;
                    }
                }
            }
    }else {

    }

        
};

reset();

document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    play(event);
};