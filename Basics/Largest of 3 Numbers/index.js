function Greatest() {
  const number1 = document.getElementById("int1").value;
  const number2 = document.getElementById("int2").value;
  const number3 = document.getElementById("int3").value;
  console.log(number1);
  if (number1 > number2 && number1 > number3) {
    document.write(number1, " is the greatest.");
  } else if (number2 > number1 && number2 > number3) {
    document.write(number2, " is the greatest.");
  } else {
    document.write(number3, " is the greatest. ");
  }
}
