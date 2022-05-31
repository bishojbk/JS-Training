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
  let numbers = clicks.split("");

  clicks = clicks + a;
  let screenValue = clicks.split("");
  console.log(screenValue, screenValue.length);
  if (screenValue.length > 24) {
    let overflow = screenValue.length - 24;

    screenValue.splice(0, overflow);
    console.log(screenValue);
  }
  document.getElementById("clicks").innerHTML = screenValue.join("");
}

function displayScreen() {
  clicks = eval(clicks);
  document.getElementById("clicks").innerHTML = clicks;
}
function deleteScreen() {
  clicks = clicks.toString();
  console.log(clicks);
  let del = clicks.split("");
  console.log(del);
  del.pop();
  clicks = del.join("");
  document.getElementById("clicks").innerHTML = clicks;
}
