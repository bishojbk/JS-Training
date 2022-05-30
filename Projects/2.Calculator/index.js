let clicks = 0;
function clearScreen() {
  document.getElementById("clicks").innerHTML = clicks;
  clicks = 0;
}
function updateScreen(a) {
  console.log(a);
  clicks = a;
}
