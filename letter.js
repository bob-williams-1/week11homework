




var lettersToDisplay = function(word, goodGuesses){

  this.gameWord = word;
  this.goodLetters = goodGuesses;
  this.displayText = '';

  // By Defualt, we start as winner is false (to aviod a premature win)
  this.winner = false;

  // Function to display hangman word to user
  this.parseDisplay = function(){

    // Show the user the hangman word
    var shown = '';

    // If no goodGuesses yet then single For Loop
    if(this.goodLetters == undefined){
     for(var i = 0; i < this.gameWord.length; i++){
        // If not the letter
        shown += ' _ ';
      }
    }
    // Otherwise, check all letters in a double loop
    else{

      // Double for loop... loop through the word itself and then each possible correct letter
      for(var i = 0; i < this.gameWord.length; i++){

        // To determine whether a _ is needed
        var letterWasFound = false;


          }
        }
        // If nothing was found
        if(!letterWasFound){
          shown += ' _ ';
        }
      }
    }



    // Check to see if the game was won (user display equals the word; ie no '_' marks)
    if(this.displayText == this.gameWord){
      this.winner = true;
    }

  }
};

// export to use in word.js
module.exports = lettersToDisplay;
