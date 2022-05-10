let number = prompt("Enter a number : ");
let difference = number - 13;
if (difference > 0) {
  document.write("The difference is : ", difference);
} else {
  document.write("The result is : ", Math.abs(difference * 2));
}
