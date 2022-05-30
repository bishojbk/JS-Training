let clicks = 0;

function ICounter() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
function DCounter() {
  if (clicks > 0) {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  }
}

function RCounter() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
}