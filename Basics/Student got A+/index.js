function Check() {
  const math = document.getElementById("math").value;
  const science = document.getElementById("science").value;
  const social = document.getElementById("social").value;
  const nepali = document.getElementById("nepali").value;
  const english = document.getElementById("english").value;
  if (math >= 89) {
    document.write("A+ on math." + "<br>");
  }
  if (science >= 89) {
    document.write("A+ on science." + "<br>");
  }
  if (social >= 89) {
    document.write("A+ on social." + "<br>");
  }
  if (nepali >= 89) {
    document.write("A+ on nepali." + "<br>");
  }
  if (english >= 89) {
    document.write("A+ one english." + "<br>");
  }
  console.log(math);
  let total =
    (parseInt(math) +
      parseInt(science) +
      parseInt(social) +
      parseInt(nepali) +
      parseInt(english)) /
    5;
  console.log(total);
  if (total >= 90) {
    document.write("The student got an A+" + "<br>");
  } else {
    document.write("The student didnt get an A+.");
  }
}
