let clicks = 0;

function ICounter() {
  document.getElementById("clicks").innerHTML = clicks;
  clicks += 1;
}
function DCounter() {
  if (clicks >= 0) {
    document.getElementById("clicks").innerHTML = clicks;
    clicks -= 1;
  }
}
