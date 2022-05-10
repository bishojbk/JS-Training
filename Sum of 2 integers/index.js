function Sum() {
  let i1 = document.getElementById("integer1").value;
  let i2 = document.getElementById("integer2").value;
  i1 = parseInt(i1);
  i2 = parseInt(i2);
  console.log(i1 + i2);
  if (i1 == i2) {
    document.write("The result is : ", 3 * (i1 + i2));
  } else {
    document.write("The sum is : ", i1 + i2);
  }
}
