let n = prompt("Enter a number");
var x = Math.floor(Math.random() * 10 - 1 + 1) + 1;
console.log(x);
if (n == x) {
  document.write("Good Work");
} else {
  document.write("Not matched");
}
