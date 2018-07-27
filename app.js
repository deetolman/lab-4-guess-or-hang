/* globals words */
/* exported getWordIndex */
/* exported getWord */
var copy = words.slice();
var chosenWord = getWord(copy);

function getWordIndex (max){
    return Math.floor(Math.random() * max); 
        
}

function getWord(){
    var index = getWordIndex(copy.length);
    var word = copy[index];
    //return word.splice();
    //console.log(word);
}


    //console.log(copy);
    //console.log(chosenWord);

function createWordArray(){

}

function guessLetter(){
    var letter = document.getElementById("letter-guessed");
    console.log(letter.value);
    var sanitizedInput = letter.value.charCodeAt(0);
    console.log(sanitizedInput);

    return false;
}
  //  function getRandomWord() {
    

