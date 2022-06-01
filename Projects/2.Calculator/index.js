let clicks = "";
let checkIfDot = true;
function clearScreen() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
  clicks = "";
  checkIfDot = true;
}

function updateScreen(a) {
  if (a == "." && !checkIfDot) {
    return;
  }
  if (a == "+" || a == "/" || a == "-" || a == "*") {
    checkIfDot = true;
  }
  if (a == ".") {
    checkIfDot = false;
  }
  clicks = clicks + a;
  let screenValue = clicks.split("");
  if (screenValue.length > 24) {
    let overflow = screenValue.length - 24;
    screenValue.splice(0, overflow);
  }
  document.getElementById("clicks").innerHTML = screenValue.join("");
}

function displayScreen() {
  clicks = eval(clicks);
  document.getElementById("clicks").innerHTML = clicks;
}
function deleteScreen() {
  clicks = clicks.toString();
  let del = clicks.split("");
  del.pop();
  clicks = del.join("");
  document.getElementById("clicks").innerHTML = clicks;
}
