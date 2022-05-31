let clicks = "";
screen = document.getElementById("screen");

function clearScreen() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
  clicks = "";
}
function updateScreen(a) {
  if (clicks == "." && a == ".") {
    return;
  } else {
    clicks = clicks + a;
    document.getElementById("clicks").innerHTML = clicks;
  }
}

function displayScreen() {
  clicks = eval(clicks);
  document.getElementById("clicks").innerHTML = clicks;
}
function deleteScreen() {
  let del = clicks.split("");
  console.log(del);
  clicks = del.splice(-1, 1);
  console.log(clicks);
  document.getElementById("clicks").innerHTML = clicks;
}
