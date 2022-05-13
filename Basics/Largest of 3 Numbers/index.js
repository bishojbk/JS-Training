function Greatest() {
  let number1 = document.getElementById("int1").value;
  let number2 = document.getElementById("int2").value;
  let number3 = document.getElementById("int3").value;
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  number3 = parseInt(number3);
  console.log(number1, number2, number3);
  if (number1 > number2 && number1 > number3) {
    document.write(number1, " is the greatest.");
  } else if (number2 > number1 && number2 > number3) {
    document.write(number2, " is the greatest.");
  } else {
    document.write(number3, " is the greatest. ");
  }
}
