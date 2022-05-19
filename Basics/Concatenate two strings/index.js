function Concatenate() {
  let string1 = document.getElementById("string").value;
  let string2 = document.getElementById("string1").value;
  let str1 = string1.substring(1, string1.length);
  let str2 = string2.substring(1, string2.length);
  let result = str1 + str2;
  document.write("The result is :", result);
}
