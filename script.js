"use strict";
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let numberInput = document.querySelector(".guess");
let hiddenNumber = document.querySelector(".number");
let check = document.querySelector(".check");
let again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreStart = 30;
let highScoreStart = 0;
score.textContent = scoreStart;

check.addEventListener("click", play);
again.addEventListener("click", reset);
function play() {
  // no number
  if (!numberInput.value) {
    message.textContent = "No number!!";
  }
  // there is number
  else {
    // not lost yet
    if (scoreStart > 1) {
      let playerNumber = Number(numberInput.value);
      // pleyer win
      if (playerNumber === secretNumber) {
        message.textContent = "Correct!";
        hiddenNumber.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        hiddenNumber.style.width = "30rem";
        check.disabled = true;
        if (highScoreStart < scoreStart) {
          highScore.textContent = scoreStart;
          highScoreStart = scoreStart;
        }
      } else {
        message.textContent =
          playerNumber > secretNumber ? "Too High!" : "Too Low!";
        --scoreStart;
        score.textContent = scoreStart;
      }
    }
    // lost
    else {
      score.textContent = "0";
      message.textContent = "You Lost :(";
    }
  }
}

function reset() {
  document.querySelector("body").style.backgroundColor = "#222";
  hiddenNumber.style.width = "15rem";
  message.textContent = "Start guessing...";
  hiddenNumber.textContent = "?";
  numberInput.value = "";
  scoreStart = 30;
  score.textContent = scoreStart;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  check.disabled = false;
}
