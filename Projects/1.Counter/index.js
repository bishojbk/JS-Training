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
<<<<<<< HEAD
}
=======
}
>>>>>>> 91371dd8c3d0230353b32c48622c155a4b067fc5
