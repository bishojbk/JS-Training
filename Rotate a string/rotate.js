function myFunction() {
    var letter = newArray.pop();
    var newWord = newArray.unshift(letter);
    var theWord = newArray.join('');
    console.log(theWord);
    document.getElementById('rotate').innerHTML = theWord;