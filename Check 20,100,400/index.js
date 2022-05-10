function Check() {
  let i1 = document.getElementById("integer1").value;
  i1 = parseInt(i1);
  if (i1 <= 20) {
    document.write("The number is under 20. ");
  } else if (i1 > 20 && i1 <= 100) {
    document.write("The number is between 20 and 100.");
  } else if (i1 > 100 && i1 <= 400) {
    document.write("The number is between 100 and 400.");
  } else {
    document.write("Not in scope.");
  }
}
