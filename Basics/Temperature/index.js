tem = prompt("You want to enter temperature in Kelvin or Celsius?");
temp = prompt("Enter temperature in your desired unit : ");
console.log(temp);
if (tem == "Kelvin") {
  let celsius = temp - 273;
  document.write("Your temperature in celsius is : ", celsius, "C");
} else {
  let kelvi = temp + 273;
  console.log(kelvi);
  document.write("Your temperature in kelvin is : ", kelvi, "K");
}
