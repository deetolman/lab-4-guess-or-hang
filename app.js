/* globals words */
/* exported getWordIndex */
/* exported getWord */
/* exported testing */

var copy = words.slice();
var chosenWord = getWord(copy);

function getWordIndex (max){
    return Math.floor(Math.random() * max); 
        
}

function getWord(){
    var index = getWordIndex(copy.length);
    var word = copy[index];
    var letters = word.split('');
    console.log(letters);
    var html = ''; 
    
        for(var i = 0; i < letters.length; i++){
                html += `${letters[i]}`;
            }
    console.log(html);
}
// function testing(){
//     for(var i = 0; i < letters.length; i++){
//         var html = '';
//         html = `${letters[i]}`;
//         console.log(html);
//     }
// }


    //console.log(copy);
    //console.log(chosenWord);

function createWordArray(){

}

function guessLetter(){
    var letter = document.getElementById("letter-guessed");
    console.log(letter.value);
    //var sanitizedInput = letter.value.charCodeAt(0);
    //console.log(sanitizedInput);

    return false;
}
  //  function getRandomWord() {
    

