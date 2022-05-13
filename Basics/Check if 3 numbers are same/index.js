function Check() {
  const number1 = +document.getElementById("int1").value;
  const number2 = +document.getElementById("int2").value;
  const number3 = +document.getElementById("int3").value;
  if (number1 == number2 && number1 == number3) {
    document.write("30");
  } else if (number1 == number2 || number1 == number3 || number2 == number3) {
    document.write("40");
  } else {
    document.write("20");
  }
}
