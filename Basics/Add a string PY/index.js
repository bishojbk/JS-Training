function Add() {
  const input = document.getElementById("string").value;
  console.log(input);
  const letter1 = input.charAt(0);
  console.log(s1);
  const letter2 = input.charAt(1);
  let total = letter1 + letter2;
  total = total.toLowerCase();
  if (total == "py") {
    document.write("The string is : ", input);
  } else {
    document.write("The string is : ", "Py" + input);
  }
}
