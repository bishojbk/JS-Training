function Java() {
  let input = document.getElementById("string").value;
  let s1 = [input.charAt(0), input.charAt(1), input.charAt(2), input.charAt(3)];
  console.log(s1);
  if (
    (s1[0] == "j" || s1[0] == "J") &&
    s1[1] == "a" &&
    s1[2] == "v" &&
    s1[3] == "a"
  ) {
    document.write("True");
  } else {
    document.write("False");
  }
}
