    // Creates an array that lists out all of the options of letters to choose from
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and guesses. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessedLetters=[];
    //var MaxTries = 10;

    
      
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;
    //captures the letter choice
    guessedLetters.push(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    
    //compare userGuess to computerGuess
    //if userGuess matches computerGuess then increase the count of wins restart the guess count
    if (userGuess === computerGuess) {
        wins++;
        guesses=8;
        guessedLetters=[];
    }
    //or decrease the number of guesses
    else {
      guesses--;
    }

    //if userGuess does not match computerGuess then increase the count of losses
    if (guesses===0) {
      losses++;
      guesses=8;
      guessedLetters=[];
    }  

      //Creatr a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
     //record the count of guesses from 9 and post to html
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
      //record each userGuess key in html
    document.getElementById('guessed').innerHTML = "Guessed Letters: " + guessedLetters;
  

    }