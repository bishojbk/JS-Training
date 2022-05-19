function Replace() {
  let string = document.getElementById("string").value;
  console.log(string);
  let length = string.length;
  let array = string.split("");
  for (let x = 0; x < length; x++) {
    let ascii = array[x].charCodeAt() - "a".charCodeAt();
    ascii = (ascii + 1) % 26;
    array[x] = String.fromCharCode(ascii + "a".charCodeAt());
  }
  console.log(array.join(""));
  document.write("The result is : ", array.join(""));
}
