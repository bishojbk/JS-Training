// let myVar = setInterval(myFunction, 1000);
let word = "alphagamer";
let newArray = word.split(""); //Converts string into arrays
console.log(newArray.length);
let newWord = [];

function myFunction() {
  for (let i = 0; i <= 10; i++) {
    let letter = newArray.pop();
    console.log(letter);
    newWord.push(letter);
    console.log(newWord);
  }
  theWord = newWord.join(""); // Converts arrays into strings
  console.log(theWord);
}
myFunction();
document.getElementById("rotate").innerHTML = theWord;
