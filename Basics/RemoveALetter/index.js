function Remove() {
  let inputString = document.getElementById("string").value;
  let inputInt = document.getElementById("int").value;
  inputInt = parseInt(inputInt) - 1;
  let letter = inputString.charAt(inputInt);
  console.log(letter);
  letter = letter.toString();
  let newString = inputString.replace(letter, "");
  console.log(newString);
  document.write("The result after removing the letter is : ", newString);
}
