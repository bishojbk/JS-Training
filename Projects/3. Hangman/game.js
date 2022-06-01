function Start() {
  let array = ["banana", "avocado", "apple", "mango", "kiwi"];
  let i = Math.floor(Math.random() * 5 + 0);
  console.log(i);
  let theWord = array[i];
  console.log(theWord);
  let length = theWord.length;
  let j = Math.floor(Math.random() * length + 0);
  console.log(j);
  let k = Math.floor(Math.random() * length + 0);
  console.log(k);
  let text = theWord.split("");
  let m = Math.floor(Math.random() * length + 0);
  let c1 = text[j];
  let c2 = text[k];
  let c3 = text[m];
  text[j] = "_";
  text[k] = "_";
  text[m] = "_";
  text = text.join(" ");
  console.log(text);
  document.getElementById("words").innerHTML = text;
}

// let tax = text.split(" ");
//   let fax = text.split(" ");
//   console.log(tax);
//   let taxLength = tax.length;
//   for (let b = 0; b <= taxLength; b++) {
//     if (tax[b] == "_") {
//       fax[b] = e;
//     }
//     fax = fax.join(" ");
