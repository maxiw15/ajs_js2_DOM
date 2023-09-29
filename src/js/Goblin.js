import getRandomNumber from "./GetRandomNumber";

export default class Goblin {
  constructor() {
    this.winCount = 0;
    this.counterGame = document.querySelector(".counter");
    this.prev_count = 0;
    this.counter = 0;
    this.cells = document.querySelectorAll(".cell");
    this.image = document.querySelector(".images");
    for (let i = 0; this.cells.length !== i; i++) {
      this.cells[i].addEventListener("click", this.click.bind(this));
    }
  }

  game() {
    this.timer = setInterval(() => {
      this.run(this.prev_count);
    }, 1000);
  }
  run(prev_count) {
    if (this.counter > 3) {
      alert("Вы проиграли");
      this.winCount = 0;
      this.counter = 0;
      this.counterGame.textContent = this.winCount;
    }
    this.nextCount = getRandomNumber(prev_count);
    this.cells[this.nextCount].appendChild(this.image);
    this.counter += 1;
  }
  click(e) {
    if (e.currentTarget.childNodes.length) {
      this.counter--;
      this.winCount++;
      this.counterGame.textContent = this.winCount;
      this.timer = setInterval(() => {
        this.run(this.prev_count);
      }, 1000);
      clearInterval(this.timer);
    }
  }
}
