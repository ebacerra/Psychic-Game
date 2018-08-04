//********Psychic Game*****

// 
//need variables to declare

var compCounter = 0;
var userCounter = 0;
var guessLeft = 0;



function guess() {
    var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "t", "v", "w", "x", "y", "z"];

    // computer chooses the random letters 1-26
    computerChoice = compLetters[Math.floor(Math.random() * 26)];
    // var compNum = computerChoice;
    // onkeyup function for the user to click

    document.onkeyup = function (event) {
        var userGuess = event.key;

        // condition for the game
        if (computerChoice === userGuess || userGuess === computerChoice) {
            document.getElementById('win').innerHTML = userCounter++;

        } else if (computerChoice > userGuess || userGuess < computerChoice) {
            document.getElementById('lose').innerHTML = compCounter++ + guessLeft--;

        }
    }

    document.onkeypress = function (event) {
        guessedLetters = event.key

        // print on HTML
        document.getElementById('win').innerHTML = userCounter;
        document.getElementById('lose').innerHTML = compCounter;
        document.getElementById('Guessed').innerHTML = guessLeft;
        document.getElementById('pressedkey').innerHTML = guessedLetters + ",";
    };

}
guess();
