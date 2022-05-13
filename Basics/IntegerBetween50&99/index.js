function Check() {
  const number1 = document.getElementById("int1").value;
  const number2 = document.getElementById("int2").value;
  const number3 = document.getElementById("int3").value;
  if (
    (number1 >= 50 && number1 <= 99) ||
    (number2 >= 50 && number2 <= 99) ||
    (number3 >= 50 && number3 <= 99)
  ) {
    document.write("True");
  } else {
    document.write("False");
  }
}
