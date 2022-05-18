function Replace() {
  let string = document.getElementById("string").value;
  let length = string.length;
  let array = string.split("");
  let charac1 = array[0];
  charac1 = charac1.toUpperCase();
  console.log(charac1);
  array = array.join("");
  let string1 = array;
  string1 = string1.replace(array[0], charac1);
  console.log(string1);
}
