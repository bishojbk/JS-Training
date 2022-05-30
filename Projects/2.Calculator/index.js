let clicks = "";
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
  let val = clicks;
  console.log(val);
  val = eval(val);
  clicks = val;
  document.getElementById("clicks").innerHTML = clicks;
}
// function deleteScreen() {
//   let del = clicks.split("");
//   console.log(del);
//   let i = del.length;
//   for (let j = 0; j <= i; j++) {
//     clicks = clicks + "";
//   }
//   document.getElementById("clicks").innerHTML = clicks;
// }
