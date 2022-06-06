let array = ["banana", "avocado", "apple", "mango", "kiwi", "melon", "litchi"];

let i = Math.floor(Math.random() * 7 + 0);

let theWord = array[i];

let length = theWord.length;

let splittedWord = theWord.split("");

let word = splittedWord;

console.log(word);

// let j = Math.floor(Math.random() * length + 0);

// let k = Math.floor(Math.random() * length + 0);

// let m = Math.floor(Math.random() * length + 0);

// let text = theWord.split("");

// let text1 = text.toString();

// let c1 = text[j];
// console.log(c1);
// let c2 = text[k];
// console.log(c2);
// let c3 = text[m];
// console.log(c3);

// let m1 = text1.indexOf(c1);
// m1 = m1 / 2;

// let m2 = text1.indexOf(c2);
// m2 = m2 / 2;

// let m3 = text1.indexOf(c3);
// m3 = m3 / 2;

// console.log(m1);

// console.log(m2);

// console.log(m3);

function Start() {
  document.getElementById("start").innerHTML = "";
  let dash = "";
  // text[j] = "_";
  // text[k] = "_";
  // text[m] = "_";

  // text = text.join(" ");

  for (let i = 0; i < length; i++) {
    dash = "_" + " " + dash;
    console.log(dash);
  }
  document.getElementById("words").innerHTML = dash;
}

function words(e) {
  let j = 0;
  for (j; j < length; j++) {
    let letter = word[j];
    if (e == letter) {
      document.getElementById("words").innerHTML = word.join("");
    }
  }
}

function Reset() {
  document.getElementById("words").innerHTML = "_ _ _ _ _";
  i = Math.floor(Math.random() * 7 + 0);
}
