const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let button = document.getElementById("buttonOne");
let pass_one = document.getElementById("passOne");
let pass_two = document.getElementById("passTwo");

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(characters);

let gen = [""];
function get_pass() {
  for (let i = 0; i < 15; i++) {
    gen[i] = characters[i];
  }
  //   gen = gen.join("")
  pass_one.textContent = gen.join("");
}

let gen2 = [""];
function get_pass2() {
  shuffle(characters);
  for (let i = 0; i < 15; i++) {
    gen2[i] = characters[i];
  }
  gen = gen.join("");
  pass_two.textContent = gen2.join("");
}
