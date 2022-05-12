function Greatest() {
  const number1 = document.getElementById("int1").value;
  const number2 = document.getElementById("int2").value;
  let diff1 = number1 - 100;
  diff1 = Math.abs(diff1);
  let diff2 = number2 - 100;
  diff2 = Math.abs(diff2);
  if (diff1 > diff2) {
    document.write(number2, " is nearer to 100.");
  } else {
    document.write(number1, " is nearer to 100.");
  }
}
