
var inquirer = require('inquirer');



ds
var guessWordList = require('./game.js');


var checkForLetter = require('./word.js');

// Link in the letters to display
var lettersToDisplay = require('./letter.js');


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersAlreadyGuessed = [];
var lettersCorrectlyGuessed = [];      
var displayHangman;





var game = {

  wordBank : guessWordList, // import list 
  guessesRemaining : 10, // per word
  currentWrd : null, // the word object

  startGame : function(){
    // 15 guesses
    this.guessesRemaining = 15;

    // get a random word from the array
    var j = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = this.wordBank[j];

    // Inform User game has begun
    console.log('Figure out the nerdy word. Do you have what it takes?');

    displayHangman = new lettersToDisplay(this.currentWrd);
    displayHangman.parseDisplay();
    console.log('guesses still Left: ' + game.guessesRemaining);

    // prompt for a letter
    keepPromptingUser();
  }

};


function keepPromptingUser(){


  console.log('');

  if(game.guessesRemaining > 0){
    inquirer.prompt([
      {
        type: "value",
        name: "letter",
        message: "Please guess a Letter: "
      }
    ]).then(function(userInput){


      
      // Valid input
      if(alphabet.indexOf(inputLetter) == -1){

        // Tell user they did not guess a letter
        console.log('You shwasted! Dude, "' + inputLetter + '" is not a letter. Try again!');
        console.log('Guesses Left: ' + game.guessesRemaining);
        console.log('Letters already guessed: ' + lettersAlreadyGuessed);
        keepPromptingUser();



        lettersAlreadyGuessed.push(inputLetter);



        var letterInWord = checkForLetter(inputLetter, game.currentWrd);

        // If the letter is in the word, update the letter object
        if(letterInWord){


          lettersCorrectlyGuessed.push(inputLetter);

  


          // Test if the user has won
          if(displayHangman.winner){
            console.log('You win! Congrats, you are legit a brogrammer!');
            console.log('Crush some brews to celebrate, mi hombre!')
            return;
          }
          // Not a win yet, so ask for another input and decrement guesses
          else{
            console.log('Guesses Left: ' + game.guessesRemaining);
            console.log('Letters already guessed: ' + lettersAlreadyGuessed);
            keepPromptingUser();
          }

        }
        // Otherwise, decrement guesses and re-prompt the old hangman object
        else{
          game.guessesRemaining--;

          displayHangman.parseDisplay();
          console.log('Guesses Left: ' + game.guessesRemaining);
          console.log('Letters already guessed: ' + lettersAlreadyGuessed);
          keepPromptingUser();
        }
        
      }

    });
    
  }

}



game.startGame();