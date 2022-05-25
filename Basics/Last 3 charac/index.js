function STR() {
  let string = document.getElementById("string").value;
  let length = string.length;
  if (length >= 3) {
    console.log(string.slice(0, -3));
    document.write("The result is : ", string.slice(-3) + string.slice(0, -3));
  }
}
