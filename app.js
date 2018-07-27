/* globals words */
/* exported getWordIndex */
/* exported getWord */
/* exported testing */
/* exported displaySpaces */

var copy = words.slice();
var chosenWord = displaySpaces(copy);

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
    var letter = document.getElementById("letter-guessed");
    console.log(letter.value);

}
  //  function getRandomWord() {
    
