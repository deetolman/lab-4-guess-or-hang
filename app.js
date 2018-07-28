/* globals words */
/* exported getWordIndex */
/* exported getWord */
/* exported displaySpaces */

var correctCounter = 0;
var copy = words.slice();
//var chosenWord = displaySpaces(copy);
var chosenWord = '';
function getWordIndex (max){
    return Math.floor(Math.random() * max); 
        
}

var guessButton = document.getElementById("guess-button");
var startButton = document.getElementById("start-button");
var index = getWordIndex(copy.length);
var word = copy[index];
var letters = word.split('');
var guessesLeft = 6;
var correctGuesses = 0;

function displaySpaces(){
    // var index = getWordIndex(copy.length);
    // var word = copy[index];
    // var letters = word.split('');
    console.log(letters);
    var html = ''; 
    for(var i = 0; i < letters.length; i++){
            html += `<label id = ${i}> _ </label>`;
        }
    console.log(html);
   
    var displayWord = document.getElementById ('hidden-letters');
    displayWord.innerHTML = html;
    //startButton.disabled = true;

    return false;
}

function guessLetter(){
    var userInput = document.getElementById("letter-guessed").value;
    console.log(userInput);
    var userMessage = document.getElementById("message");
    var displayWord = document.getElementById('hidden-letters');
    correctGuesses = false;
    

    for(var j = 0; j < letters.length; j++) {
        var displayCharacters = document.getElementById(j);
        if(userInput === letters[j]){
            correctCounter++;
            correctGuesses = true;
            displayCharacters.innerHTML = letters[j];
            userMessage.innerText = "Good job! That letter was a match!";
            console.log(correctCounter);
        }

    }
    if(correctCounter === letters.length){
        userMessage.innerText = 'Congratulations! You\'ve escaped the hangman\'s noose!';
        guessButton.disabled = true;
        console.log(correctCounter);//win condition
    }

    if(correctGuesses === false){
        console.log('User made an incorrect guess!');
        userMessage.innerText = "Sorry, not a match!";
        var wrongLetter = document.getElementById("wrong-list");
        wrongLetter.innerText += ' ' + userInput;
        guessesLeft--;
        console.log(guessesLeft);
            //if statement for losing endgame situation
            //replace userMessage.innerText with "you lose blah blah"
    }

    if(guessesLeft === 0) {
        userMessage.innerText = "You ran out of guesses... You lose!"
        guessButton.disabled = true;
    }


    return false;
}
