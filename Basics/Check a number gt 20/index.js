function Greater() {
  const number1 = document.getElementById("int1").value;
  const number2 = document.getElementById("int2").value;
  const number3 = document.getElementById("int3").value;
  if (number1 > 20 || number2 > 20 || number3 > 20) {
    document.write("One or more of the number is greater than 20." + "<br>");
  } else {
    document.write("None of the numbers are greater than 20." + "<br>");
  }
  if (number1 < number2 && number1 < number3) {
    document.write(number1, "is the smallest.");
  } else if (number2 < number1 && number2 < number3) {
    document.write(number2, " is the smallest.");
  } else {
    document.write(number3, " is the smallest.");
  }
}
