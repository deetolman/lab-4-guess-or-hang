/* globals words */
/* exported loadWord */
function loadWord (){
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min)) + min; 
        
      }
console.log(getRandomInt(0, words.length));
}
function guessWord(){
    var copy = words.slice();
console.log(copy);
}
  //  function getRandomWord() {
    

