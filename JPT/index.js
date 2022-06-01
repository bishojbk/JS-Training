screen = document.getElementById("screen-content");

function updatescreen(e) {
  document.getElementById("blinker").style.visibility = "hidden";
  screen.innerHTML = screen.textContent + e;
}

function clearscreen() {
  screen.innerHTML = "";
  document.getElementById("blinker").style.visibility = "visible";
}

function calculateResult() {
  let val = screen.textContent;
  val = eval(val);
  screen.innerHTML = val;
}
