function Capital() {
  let string = document.getElementById("string1").value;
  string = string.split(" ");
  let x = string.length;

  for (let i = 0; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  document.write("The result is : ", string.join(" "));
}
