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

function displaySpaces(){
    var index = getWordIndex(copy.length);
    var word = copy[index];
    var letters = word.split('');
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

//function getWord(){
//     var index = getWordIndex(copy.length);
//     var word = copy[index];
//     var letters = word.split('');
//     console.log(letters);
//     var html = ''; 
    
//         for(var i = 0; i < letters.length; i++){
//                 html += `<label id = "${letters[i]}">${letters[i]}</label>`;
//             }
//     console.log(html);
//    var displayWord = document.getElementById ('hidden-letters');
//    displayWord.innerHTML = html;
// }



    //console.log(copy);
    //console.log(chosenWord);

function createWordArray(){

}

function guessLetter(){
    
    var index = getWordIndex(copy.length);
    var word = copy[index];
    var letters = word.split('');
    var letter = document.getElementById("letter-guessed").value;
    console.log(letter);
    var userMessage = document.getElementById("message");
    //ar uppercase = letter.toUpperCase();
    for(var j = 0; j < letters.length; j++) {
        console.log("Habla Espanol", letter, letters[j]);
        var displayWord = document.getElementById('hidden-letters');
        var html = '';
        displayWord.innerHTML = html;
        if(letter === letters[j]){
            console.log("Hello");
            var displayCharacters = document.getElementById(letters[j]);
            userMessage.innerText = "Good job! That letter was a match!"
            displayCharacters.innerHTML = letters[j];
        }
        //else {

        
    }
    return false;
}
  //  function getRandomWord() {
    
