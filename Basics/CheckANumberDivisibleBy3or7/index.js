function Divide() {
  let number = document.getElementById("int").value;
  if (number % 3 == 0) {
    document.write("The number ", number, " is divisible by 3.");
  } else if (number % 7 == 0) {
    document.write("The number ", number, " is divisible by 7.");
  } else document.write("The number isnt divisible by 3 or 7.");
}
