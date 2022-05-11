function Change() {
  let input = document.getElementById("string").value;
  let length = input.length;
  console.log(length);
  {
    if (length >= 1) {
      let E1 = input.charAt(0);
      console.log(E1);
      let E2 = input.charAt(length - 1);
      console.log(E2);
      let replaced1 = input.replace(E1, E2);
      console.log(replaced1);
      let length1 = replaced1.length;
      let E3 = replaced1.charAt(length1 - 1);
      console.log(E3);
      let final = replaced1.replace(replaced1.charAt(length1 - 1), E1);
      console.log(final);
    }
  }
}
