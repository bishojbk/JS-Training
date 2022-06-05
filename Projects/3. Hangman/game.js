let array = ["banana", "avocado", "apple", "mango", "kiwi", "melon", "litchi"];
let i = Math.floor(Math.random() * 7 + 0);

let theWord = array[i];

let length = theWord.length;

let j = Math.floor(Math.random() * length + 0);

let k = Math.floor(Math.random() * length + 0);

let m = Math.floor(Math.random() * length + 0);

let text = theWord.split("");

let text1 = text.toString();

let c1 = text[j];
let c2 = text[k];
let c3 = text[m];

function Start() {
  document.getElementById("start").innerHTML = "";
  text[j] = "_";
  text[k] = "_";
  text[m] = "_";

  text = text.join(" ");
  document.getElementById("words").innerHTML = text;
}

function words(e) {
  {
    let tax = text.split(" ");
    let fax = text.split(" ");
    console.log(tax);
    let taxLength = tax.length;
    for (let b = 0; b <= taxLength; b++) {
      if (tax[b] == "_") {
        if (e == c1 || e == c2 || e == c3) fax[b] = e;
        console.log(fax[b]);
      }
      let notFax = fax.join(" ");
      document.getElementById("words").innerHTML = notFax;
    }
  }
}
