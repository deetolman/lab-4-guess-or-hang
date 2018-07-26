/* globals words */
/* exported getWordIndex */
/* exported getWord */
var copy = words.slice();
var chosenWord = getWord(copy);

function getWordIndex (max){
    return Math.floor(Math.random() * max); 
        
    }
console.log(getRandomInt(0, words.length));

function getWord(){
    var index = getWordIndex(copy.length);
    var word = copy[index];
    //return word.splice();
    console.log(word);
}


    //console.log(copy);
    console.log(chosenWord);

function createWordArray(){

}

function guessLetter(){
    var letter = document.getElementById("guess-letter")

}
  //  function getRandomWord() {
    

