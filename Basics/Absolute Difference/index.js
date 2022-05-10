function Abs() {
  let int = document.getElementById("integer1").value;
  int = parseInt(int);
  if (int > 19) {
    document.write("The result is : ", Math.abs((int - 19) * 3));
  } else {
    document.write("The result is : ", Math.abs(int - 19));
  }
}
