//random background
let btn = document.querySelector(".container");
let id = document.querySelector("#id");
let simbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
function randomColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    hex += simbols[index];
  }
  return hex;
}
btn.addEventListener("click", () => {
  let deg = Math.floor(Math.random() * 180);
  let gradiend = `linear-gradient(${deg}deg,${randomColor()},${randomColor()},${randomColor()})`;
  document.body.style.backgroundColor = randomColor();
  document.body.style.backgroundImage = gradiend;
  id.textContent = gradiend;
});
