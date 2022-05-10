function True() {
  let i1 = document.getElementById("integer1").value;
  let i2 = document.getElementById("integer2").value;
  i1 = parseInt(i1);
  i2 = parseInt(i2);
  if (i1 == 50 || i2 == 50) {
    console.log("true");
    document.write("True");
  } else if (i1 + i2 == 50) {
    console.log("true");
    document.write("True");
  } else {
    console.log("false");
    document.write("False");
  }
}
