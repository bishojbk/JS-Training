function Convert() {
  let string = document.getElementById("string").value;
  let array = string.split("");
  array = array.sort();
  array = array.join("");
  document.write("The result is : ", array);
}
