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
