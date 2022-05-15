function Reverse() {
  let string = document.getElementById("string").value;
  let split = string.split("");
  let reverse = split.reverse();
  let result = reverse.join("");
  document.write("The reverse of the string is ", result);
}
