let number = prompt("Enter a number");
let x = Math.floor(Math.random() * 10 - 1 + 1) + 1;
console.log(x);
if (number == x) {
  document.write("Good Work");
} else {
  document.write("Not matched");
}
