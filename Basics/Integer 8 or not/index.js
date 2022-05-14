function Check() {
  const number1 = +document.getElementById("int1").value;
  const number2 = +document.getElementById("int2").value;
  if (number1 == 8 || number2 == 8) {
    document.write("One of the integer is 8. " + "<br>");
  }
  const sum = number1 + number2;
  const diff = number1 - number2;
  let diff1 = Math.abs(diff);
  console.log(diff1);
  if (sum == 8 || diff1 == 8) {
    document.write("The sum or difference is 8.");
  }
}
