function Check() {
  const number1 = document.getElementById("in1").value;
  const number2 = document.getElementById("in2").value;
  const number3 = document.getElementById("in3").value;
  let length1 = number1.length;
  console.log(length1);
  let length2 = number2.length;
  let length3 = number3.length;
  let split1 = number1.split("");
  let split2 = number2.split("");
  let split3 = number3.split("");
  let last1 = split1[length1 - 1];
  console.log(last1);
  last1 = parseInt(last1);
  let last2 = split2[length2 - 1];
  console.log(last2);
  last2 = parseInt(last2);
  let last3 = split3[length3 - 1];
  console.log(last3);
  last3 = parseInt(last3);
  if ((last1 == last2) == last3) {
    document.write("The last digits are same. ");
  } else {
    document.write("They are not same.");
  }
}
