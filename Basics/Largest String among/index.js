function longest_string() {
  console.log("Hi");
  let l = document.getElementById("suii").value;
  console.log(l);
  const string = l.split(",");
  let length = string.length;
  console.log(length);
  let maxArr = "";

  for (let i = 0; i < length; i++) {
    console.log(string[i]);
    if (string[i].length > maxArr.length) {
      maxArr = string[i];
      console.log(maxArr);
    }
  }

  document.write("The largest string is : ", maxArr);
}
// longest_string();
