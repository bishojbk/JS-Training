function longest_string(string) {
  let length = string.length;
  console.log(length);
  let maxArr = "";

  for (let i = 0; i < length; i++) {
    console.log(string[i]);
    if (string[i] > maxArr) {
      maxArr = string[i];
      console.log(maxArr);
    }
  }

  document.write("The largest string is : ", maxArr);
}
longest_string(["EJR", "Alisha", "Anisha", "Eminem", "Kendrick"]);
