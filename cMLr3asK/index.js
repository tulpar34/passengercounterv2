let saveEl = document.getElementById("save-el");
let gecmisBilgi = localStorage.getItem("gecmisBilgi");
const toplamEl = document.getElementById("totalpeople");
if (gecmisBilgi !== null) {
  saveEl.textContent = localStorage.getItem("gecmisBilgi");
} else {
  saveEl.textContent = "";
}

let countEl = document.getElementById("count-el");
let count = 0;
let toplamYolcu = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  toplamYolcu += count;
  localStorage.setItem("gecmisBilgi", saveEl.textContent);
  toplamEl.textContent = toplamYolcu;
  countEl.textContent = 0;
  count = 0;
}