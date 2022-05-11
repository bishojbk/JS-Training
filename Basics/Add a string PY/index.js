function Add() {
  let input = document.getElementById("string").value;
  console.log(input);
  let s1 = input.charAt(0);
  console.log(s1);
  let s2 = input.charAt(1);
  let s3 = s1 + s2;
  s3 = s3.toLowerCase();
  if (s3 == "py") {
    document.write("The string is : ", input);
  } else {
    document.write("The string is : ", "Py" + input);
  }
}
