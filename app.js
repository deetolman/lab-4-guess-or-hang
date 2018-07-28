/* globals words */
/* exported getWordIndex */
/* exported getWord */
/* exported testing */
/* exported displaySpaces */

var copy = words.slice();
//var chosenWord = displaySpaces(copy);
var chosenWord = '';
function getWordIndex (max){
    return Math.floor(Math.random() * max); 
        
}

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
            userMessage.innerText = "Good job! That letter was a match!";
            displayCharacters.innerHTML = letters[j];
            correctGuesses = true;
        }
        console.log(correctGuesses);
        // else if(userInput !== letters[j]) {
        //     guess = false;
        // }
    }
    if(correctGuesses === false){
        console.log('hit this code');
        userMessage.innerText = "Sorry, not a match!";
        var wrongLetter = document.getElementById("wrong-list");
        wrongLetter.innerText += ' ' + userInput;
        guessesLeft--;
        console.log(guessesLeft); 
    }


    return false;
}
