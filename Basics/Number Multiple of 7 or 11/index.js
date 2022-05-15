function Multiple() {
  let number1 = document.getElementById("int1").value;
  let number2 = document.getElementById("int2").value;
  if (number1 < 0 || number2 < 0) {
    document.write("Please, enter a positive number. ");
  } else {
    if (number1 % 7 == 0 && number2 % 7 !== 0) {
      document.write("number1 is a multiple of 7.");
    } else if (number1 % 11 == 0 && number2 % 11 !== 0) {
      document.write("number1 is a multiple of 11. ");
    } else {
      if (number2 % 7 == 0 && number1 % 7 !== 0) {
        document.write("number2, is a multiple of 7.");
        if (number2 % 11 == 0 && number1 % 11 !== 0) {
          document.write("number2 is a multiple of 11.");
        }
      }
    }
  }
}
