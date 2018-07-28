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

function displaySpaces(){
    // var index = getWordIndex(copy.length);
    // var word = copy[index];
    // var letters = word.split('');
    console.log(letters);
    var html = ''; 
    for(var i = 0; i < letters.length; i++){
            html += `<label id = "${letters[i]}"> _ </label>`;
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
    console.log(displayCharacters);
    //ar uppercase = letter.toUpperCase();
    for(var j = 0; j < letters.length; j++) {
        var displayCharacters = document.getElementById(letters[j]);
        console.log("Habla Espanol", userInput, letters[j]);
        if(userInput === letters[j]){
            console.log("Hello");
            userMessage.innerText = "Good job! That letter was a match!"
            
            displayCharacters.innerHTML = letters[j];
        }
        //else {

        
    }
    return false;
}
