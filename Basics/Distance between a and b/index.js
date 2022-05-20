function Distance() {
  let string = document.getElementById("str").value;
  if (/a...b/.test(string) || /b...a/.test(string)) document.write("True");
  else {
    document.write("False");
  }
}
