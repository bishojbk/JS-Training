function Change() {
  let inputString = document.getElementById("string").value;
  let length = inputString.length;
  console.log(length);
  {
    if (length >= 1) {
      let letter1 = inputString.charAt(0);
      console.log(letter1);
      let finalString = letter1 + inputString + letter1;
      document.write("The result is : ", finalString);
    }
  }
}
