
var wins = 0;
var losses = 0;
var guessesLeft = 9;


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesleftText = document.getElementById("guessesLeft");
var lettersUsedText = document.getElementById("lettersUsed");

var answersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userGuesses = [];

var correctAnswers = answersArr[Math.floor(Math.random() * answersArr.length)];
console.log("computer guess " + correctAnswers);


document.onkeyup = function (event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);
    if (answersArr.indexOf(userGuess) >= 0) {
        if (guessesLeft != 1) {
            guessesLeft -= 1;
            guessesleftText.textContent = (" Guesses left " + guessesLeft);
            lettersUsedText.textContent = (" You guessed " + userGuesses);
            if (userGuess === correctAnswers) {
                wins++;
                winsText.textContent = ("wins " + wins);
                guessesLeft = 9;
                userGuesses = [];
                guessesleftText.textContent = ("guesses Left " + guessesLeft)
                lettersUsedText.textcontext = ("letterused" + userGuesses);
                correctAnswers = answersArr[Math.floor(Math.random() * answersArr.length)];
                console.log("You Win!");
                console.log(correctAnswers);
            }
        } else {
            losses++;
            lossesText.textContent = ("loss " + losses);
            guessesLeft = 9;
            userGuesses = [];
            guessesleftText.textContent = ("Guesses left " + userGuesses);
            lettersUsedText.textcontext = ("letterused" + userGuesses);
            correctAnswers = answersArr[Math.floor(Math.random() * answersArr.length)];
            console.log("You Loose!");
            console.log(correctAnswers);
        }


    }




}
