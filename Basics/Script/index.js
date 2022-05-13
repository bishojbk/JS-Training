function Check() {
  let string1 = document.getElementById("string").value;
  const length = string1.length;
  let array = [
    string1.charAt(4),
    string1.charAt(5),
    string1.charAt(6),
    string1.charAt(7),
    string1.charAt(8),
    string1.charAt(9),
  ];
  console.log(array);
  let final1;
  let final2;
  let s1 = "";
  let s2 = "";
  if (
    array[0] == "S" &&
    array[1] == "c" &&
    array[2] == "r" &&
    array[3] == "i" &&
    array[4] == "p" &&
    array[5] == "t"
  ) {
    let string2 = string1.split("");
    console.log(string2);
    for (let i = 0; i <= 3; i++) {
      final1 = string2[i];
      console.log(final1);
      final1 = final1.toString();
      s1 = s1 + final1;
      s1 = s1.toString();
      console.log(s1);
    }
    for (let x = 10; x <= length - 1; x++) {
      final2 = string2[x];
      console.log(final2);
      final1 = final2.toString();
      s2 = s2 + final2;
      s2 = s2.toString();
      console.log(s2);
    }
    const final = s1 + s2;
    console.log(final);
    document.write("The result is :", final);
  } else {
    document.write("The result is : ", string1);
  }
}
