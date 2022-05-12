function Check() {
  let string = document.getElementById("string").value;
  console.log(string);
  let charac = document.getElementById("charac").value;
  let array = string.split("");
  let string2 = array[2];
  let string3 = array[3];
  let string4 = array[4];
  if (charac == string2 || charac == string3 || charac == string4) {
    document.write(
      "The desired character exists within the 2nd to 4th position. "
    );
  }
}
