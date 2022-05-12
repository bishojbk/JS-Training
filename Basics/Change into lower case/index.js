function Convert() {
  let inputString = document.getElementById("string").value;
  const length = inputString.length;
  console.log(length);
  if (length <= 3) {
    const inputString1 = inputString.toUpperCase();
    document.write("The result is : ", inputString1);
  } else {
    let array = inputString.split("");
    let char1 = array[0];
    let char2 = array[1];
    let char3 = array[2];
    let chara1 = char1.toLowerCase();
    let chara2 = char2.toLowerCase();
    let chara3 = char3.toLowerCase();
    array[0] = chara1;
    array[1] = chara2;
    array[2] = chara3;
    let result = array.join("");
    console.log(result);
    document.write("The result is ", result);
  }
}
