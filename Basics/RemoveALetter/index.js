function Remove() {
  let inputS = document.getElementById("string").value;
  let inputI = document.getElementById("int").value;
  inputI = parseInt(inputI) - 1;
  let letter = inputS.charAt(inputI);
  console.log(letter);
  letter = letter.toString();
  let newString = inputS.replace(letter, "");
  console.log(newString);
  //   document.write("The result after removing the letter is : ", newString);
}
