function Exchange() {
  let string = document.getElementById("string").value;
  let array = string.split("");
  const length = string.length;
  let result = string.replace(array[length - 1], array[0]);
  let array1 = result.split("");
  let s1 = array[length - 1];
  let result1 = result.replace(array1[0], s1);
  document.write("The result is : ", result1);
}
