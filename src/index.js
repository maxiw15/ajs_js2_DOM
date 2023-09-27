import "./css/style.css";
import getRandomNumber from "./js/app";
import "./js/app";

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const image = document.querySelector(".images");
  let prev_count = 0;
  setInterval(() => {
    let nextCount = getRandomNumber(prev_count);
    cells[nextCount].appendChild(image);
  }, 500);
});
