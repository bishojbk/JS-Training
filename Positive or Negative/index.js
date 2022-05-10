function Check() {
  let i1 = document.getElementById("integer1").value;
  let i2 = document.getElementById("integer2").value;
  i1 = parseInt(i1);
  i2 = parseInt(i2);
  if (i1 > 0) {
    document.write("The number is positive." + "<br>");
  } else {
    document.write("The number is negative." + "<br>");
  }
  if (i2 > 0) {
    document.write("The number is positive." + "<br>");
  } else {
    document.write("The number is negative." + "<br>");
  }
}
