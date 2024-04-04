let section = document.querySelector("#section");
function randomcolor() {
  let randomrang1 = Math.floor(Math.random() * 255);
  let randomrang2 = Math.floor(Math.random() * 255);
  let randomrang3 = Math.floor(Math.random() * 255);
  let deg = Math.floor(Math.random() * 180);
  console.log(deg);
  return `linear-gradient(${deg}deg,rgb(${randomrang1},${randomrang3},${randomrang2},${randomrang1}),rgb( ${randomrang2},${randomrang1},${randomrang2},${randomrang3}))`;
}
function clicksection() {
  section.style.background = randomcolor();
}
section.setAttribute("onclick", "clicksection()");

// section.style.backgroundImage = `linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));`;
// section.style.background = `linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))`;
