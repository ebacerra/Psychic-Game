//********Psychic Game*****

// 
//need variables to declare
var compCounter = 0;
var userCounter = 0;
var guessLeft = 9;


function guess() {
    var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "t", "v", "w", "x", "y", "z"];

    // computer chooses the random letters 1-26
    computerChoice = compLetters[Math.floor(Math.random() * 26)];



    // onkeyup function for the user to click
    document.onkeyup = function (event) {
        var userGuess = event.key;



        // condition
        if (computerChoice === userGuess || userGuess === computerChoice) {
            document.getElementById('result').innerHTML = userCounter++;
            guess();
            // I tried to apply the callback to auto restart the game and it's not working.

        } else if (computerChoice > userGuess || userGuess < computerChoice) {
            document.getElementById('lose').innerHTML = compCounter++
            guessLeft--;

        }
    }
    // ---- see example from printed on HTML page on "Guesses so far" section: k, d, m, g, j, c, n, v, p, e,
    // I got this to list all of the pressed keys but when I had added multiple events to do this, it slowed down the results. There's gotta be a better way to do this.. not sure if it's my internet connections but it's probably my coding :(
    document.onkeypress = function (event) {
        guessedLetter1 = event.key;
        document.onkeypress = function (event) {
            guessedLetter2 = event.key;
            document.onkeypress = function (event) {
                guessedLetter3 = event.key;
                document.onkeypress = function (event) {
                    guessedLetter4 = event.key;
                    document.onkeypress = function (event) {
                        guessedLetter5 = event.key;
                        document.onkeypress = function (event) {
                            guessedLetter6 = event.key;
                            document.onkeypress = function (event) {
                                guessedLetter7 = event.key;
                                document.onkeypress = function (event) {
                                    guessedLetter8 = event.key;
                                    document.onkeypress = function (event) {
                                        guessedLetter9 = event.key;
                                        document.onkeypress = function (event) {
                                            guessedLetter10 = event.key;

                                            // print on HTML
                                            document.getElementById('result').innerHTML = userCounter;
                                            document.getElementById('lose').innerHTML = compCounter;
                                            document.getElementById('Guessed').innerHTML = guessLeft;
                                            document.getElementById('pressedkey').innerHTML = guessedLetter1 + ", " + guessedLetter2 + ", " + guessedLetter3 + ", " + guessedLetter4 + ", " + guessedLetter5 + ", " + guessedLetter6 + ", " + guessedLetter7 + ", " + guessedLetter8 + ", "
                                                + guessedLetter9 + ", " + guessedLetter10;


                                        };

                                    };

                                };

                            };

                        };
                    };
                };

            };

        };

    };

}
guess();

// The game is working fine except it's not auto restarting without refreshing the page. I couldn't figure out how to allign the results to my category list.. 
/*
****my code***
Wins:
1

Loses:
2

Guesses Left:
-2

Your Guesses so far:
k, d, m, g, j, c, n, v, p, e 

---------------------------

How it should be:
Wins: 1

Loses: 2

Guesses Left: -2

Your Guesses so far:
k, d, m, g, j, c, n, v, p, e /*

I also couldn't make it to stop at 10, it keeps going */