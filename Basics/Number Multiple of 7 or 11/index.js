function Multiple() {
  let number1 = document.getElementById("int1").value;
  let number2 = document.getElementById("int2").value;
  if (
    !(
      (number1 % 7 == 0 || number1 % 11 == 0) &&
      (number2 % 7 == 0 || number2 % 11 == 0)
    )
  ) {
    document.write(
      number1 % 7 == 0 ||
        number1 % 11 == 0 ||
        number2 % 7 == 0 ||
        number2 % 11 == 0
    );
  } else document.write("False");
}
