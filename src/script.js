"use strict";

const bodyEl = document.querySelector("body");
const numberEl = document.querySelector(".number");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");
const btnGuess = document.querySelector(".check");

let secretNumber,
  score,
  highscore = 0,
  playing;

const displayMessage = function (msg) {
  messageEl.textContent = msg;
};

const init = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  playing = true;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  bodyEl.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
};

init();

btnGuess.addEventListener("click", function () {
  if (playing) {
    const guess = Number(guessEl.value);

    // When input is invalid
    if (!guess || guess < 1 || guess > 20) {
      displayMessage("🚫 Enter a number between 1 and 20!");
    }

    // When player wins
    else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
      numberEl.textContent = secretNumber;
      bodyEl.style.backgroundColor = "#60b347";
      numberEl.style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = highscore;
      }
      playing = false;
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
        );
        score--;
        scoreEl.textContent = score;
      } else {
        displayMessage("💥 You lost the game!");
        scoreEl.textContent = 0;
        playing = false;
      }
    }
  }
});

guessEl.addEventListener("keyup", function (event) {
  if (playing) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnGuess.click();
    }
  }
});

btnAgain.addEventListener("click", init);

bodyEl.addEventListener("keyup", function (event) {
  if (event.key === "r") {
    event.preventDefault();
    btnAgain.click();
  }
});
