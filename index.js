const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const author = document.getElementById("author");

const colours = [
  "#fff3d4",
  "#fffbeb",
  "#fffcf7",
  "#fff7e0",
  "#fffdf7",
  "#fffdfa",
];

const words1 = [
  ['"Hope"', "is", "the", "thing", "with", "feathers", "-"],
  ["That", "perches", "in", "the", "soul", "-"],
  ["And", "sings", "the", "tune", "without", "the", "words", "-"],
  ["And", "never", "stops", "-", "at", "all", "-"],
];

const words2 = [
  ["And", "sweetest", "-", "in", "the", "Gale", "-", "is", "heard", "-"],
  ["And", "sore", "must", "be", "the", "storm", "-"],
  ["That", "could", "abash", "the", "little", "Bird"],
  ["That", "kept", "so", "many", "warm", "-"],
];

const words3 = [
  ["I've", "heard", "it", "in", "the", "chillest", "land", "-"],
  ["And", "on", "the", "strangest", "Sea", "-"],
  ["Yet", "-", "never", "-", "in", "Extremity,"],
  ["It", "asked", "a", "crumb", "-", "of", "me."],
];

function setColour(ele) {
  const colour = getRandomColour();
  ele.style.color = colour;
  ele.style.textShadow = `2px 1.5px 8px ${colour}`;
}

function removeColour(ele) {
  ele.style.color = "#484541";
  ele.style.textShadow = "0 0 2px #201f1e";
}

function getRandomColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}

function setHover(word, stanza) {
  const w = document.createElement("div");
  w.classList.add("word");
  w.innerHTML = word + "&nbsp&nbsp";
  w.addEventListener("mouseover", () => setColour(w));
  w.addEventListener("mouseout", () => removeColour(w));
  stanza.appendChild(w);
}

function createLine(line, stanza) {
  const l = document.createElement("div");
  l.classList.add("line");
  line.forEach((word) => {
    setHover(word, stanza);
  });
  stanza.appendChild(l);
}

words1.forEach((line) => {
  createLine(line, first);
});

words2.forEach((line) => {
  createLine(line, second);
});

words3.forEach((line) => {
  createLine(line, third);
});

author.addEventListener("mouseover", () => setColour(author));
author.addEventListener("mouseout", () => removeColour(author));
