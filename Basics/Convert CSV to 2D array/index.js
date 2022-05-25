function two_D_array(CSV) {
  let name = document.getElementById("string1").value;
  let address = document.getElementById("int1").value;
  let age = document.getElementById("string2").value;
  let name1 = document.getElementById("int2").value;
  let address1 = document.getElementById("string3").value;
  let age1 = document.getElementById("int3").value;
  CSV = [name, address, age, name1, address1, age1];
  console.log(CSV);

  array = [];
  CSV = CSV.splice(",");

  for (i = 0; i < CSV.length; i = i + 2) {
    array[i] = [CSV[i], CSV[i + 1]];
  }

  document.write(JSON.stringify(array));
}
