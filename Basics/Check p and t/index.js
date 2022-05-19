function Check() {
  let string = document.getElementById("string").value;
  let p = string.replace(/[^p]/gi, "").length;
  let t = string.replace(/[^t]/gi, "").length;
  if (p == t) {
    document.write("There are equal numbers of p and t.");
  } else {
    document.write("Not Equal");
  }
}
