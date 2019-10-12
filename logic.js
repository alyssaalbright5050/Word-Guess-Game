//Variables that set initial word guess game

var bandsArray = ["madonna", "queen", "poison", "blondie", "bonjovi", "motley crue", "aerosmith", "rem", "metallica"];
var wins = 0;
var losses = 0;
var incorrectGuess = [];
var guessesLeft = 3;
var underScore = [];
var correctGuess = [];
var chosenBandName = "";
var bandTitleSplit = chosenBandName.split("");


var arrayToLower = String.prototype.toLowerCase.apply(bandsArray).split(",");

chosenBandName = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];
console.log(chosenBandName);
var bandTitleSplit = chosenBandName.split(",");

for (var i = 0; i < chosenBandName.length; i++) {
    underScore.push("_");
    document.getElementById("userProgress").innerHTML = underScore.join(" ");
}

function gameStart() {
    incorrectGuess = [];
    correctGuess = [];
    underScore = [];
    guessesLeft = 12;
    arrayToLower = String.prototype.toLowerCase.apply(bandsArray).split(",");
    chosenBandName = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];

    for (var i = 0; i < chosenBandName.length; i++) {
        underScore.push("_");
        console.log(underScore);
        document.getElementById("userProgress").innerHTML = underScore.join(" ");
    }
}


document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


    if (chosenBandName.indexOf(userGuess) > -1) {

        correctGuess.push(userGuess);
        console.log(correctGuess);
    } else {
        incorrectGuess.push(userGuess);
        guessesLeft--;
        console.log(incorrectGuess);
        console.log(guessesLeft);
        document.getElementById("prevGuesses").innerHTML = incorrectGuess;
        document.getElementById("guessesleft").innerHTML = guessesLeft;
    }


    for (var i = 0; i < chosenBandName.length; i++) {


        if (chosenBandName[i] === userGuess) {
            underScore[i] = userGuess;
            console.log(underScore);
            console.log(underScore.join(" "));
            document.getElementById("userProgress").innerHTML = underScore.join(" ");
        }

        if (underScore.join("") === chosenBandName) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            alert("You won!");

            gameStart();

        }

        else if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            alert("You lost");

            gameStart();


        }
    }
}