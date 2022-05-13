function Check() {
  const number1 = +document.getElementById("int1").value;
  const number2 = +document.getElementById("int2").value;
  const number3 = +document.getElementById("int3").value;
  if (number3 > number2 && number2 > number1) {
    document.write("The numbers are in strict mode.");
  } else {
    document.write("The numbers are in soft mode. ");
  }
}
