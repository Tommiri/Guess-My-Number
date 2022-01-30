"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayText = function (Class, text) {
  document.querySelector(Class).textContent = text;
};

document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (!guess) {
      displayText(".message", "⛔️ No number!");

      // When player wins
    } else if (guess === secretNumber) {
      if (score > highscore) {
        highscore = score;
        displayText(".highscore", highscore);
      }

      displayText(".message", "🎉 Correct number!");
      displayText(".number", secretNumber);

      document.querySelector("body").style.backgroundColor =
        "#60b347";
      document.querySelector(".number").style.width = "30rem";
      // When guess is wrong
    } else if (guess !== secretNumber) {
      // While score is above 0
      if (score > 1) {
        displayText(
          ".message",
          guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
        );
        score--;
        displayText(".score", score);
      }

      // When score hits 0
      else {
        displayText(".message", "😵 You lost the game!");
        displayText(".number", secretNumber);
        displayText(".score", 0);

        document.querySelector("body").style.backgroundColor =
          "#9b0808";
        document.querySelector(".number").style.width = "30rem";
      }
    }
  });

document
  .querySelector(".again")
  .addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayText(".number", "?");
    displayText(".message", "Start guessing...");
    displayText(".score", score);
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
