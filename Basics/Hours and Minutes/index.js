function Convert() {
  let number = document.getElementById("int1").value;
  let hours = Math.floor(number / 60);
  let min = number % 60;
  document.write("The time is : ", hours + ":", +min);
}
