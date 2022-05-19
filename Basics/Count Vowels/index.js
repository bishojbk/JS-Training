function Vowels() {
  let string = document.getElementById("str").value;
  document.write(string.replace(/[^aeiou]/gi, "").length);
}
