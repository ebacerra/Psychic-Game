//********Psychic Game*****

// 
//need variables to declare

var compCounter = 0;
var userCounter = 0;
var guessLeft = 9 - +;

function game() {
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "t", "v", "w", "x", "y", "z"];

    // computer chooses the random letters 1-26
    computerChoice = Math.floor(Math.random() * 26);
    // var compNum = computerChoice;
    // onkeyup function for the user to click

    document.onkeyup = function (event) {
        var userGuess = event.key;

        if (computerChoice === userGuess || userGuess === computerChoice || computerChoice <= userGuess || userGuess >= computerChoice) {
            document.getElementById('result').innerHTML = userCounter++;

        } else {
            document.getElementById('score').innerHTML = guessLeft--;

        }
    }

    document.onkeypress = function (event) {
        guessedLetters = event.key

        // print on HTML
        document.getElementById('result').innerHTML = "Win:   " + userCounter;
        document.getElementById('score').innerHTML = "Lose:   " + compCounter;
        document.getElementById('Guessed').innerHTML = "Guesses Left:   " + guessLeft;
        document.getElementById('pressedkey').innerHTML = "Your Guesses so far:   " + guessedLetters;

    };

}
game();
