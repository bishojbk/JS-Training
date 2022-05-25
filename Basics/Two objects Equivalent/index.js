function compareObjects() {
  let name = document.getElementById("name1").value;
  let address = document.getElementById("address1").value;
  let age = document.getElementById("age1").value;
  let name1 = document.getElementById("name2").value;
  let address1 = document.getElementById("address2").value;
  let age1 = document.getElementById("age2").value;

  let xs = JSON.stringify(name, address, age);
  let ys = JSON.stringify(name1, address1, age1);
  if (xs == ys) {
    document.write("the objects are identical");
  } else {
    document.write("the objects are NOT identical");
  }
}
