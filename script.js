const gameField = document.querySelector("#gamefield");
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let computerChoice = Math.floor(Math.random() * 3);
let userChoice;

addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  rock.addEventListener("click", startAnimationRock);
  paper.addEventListener("click", startAnimationPaper);
  scissors.addEventListener("click", startAnimationScissors);
}

function startAnimationRock() {
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", youChoseRock);
}

function startAnimationPaper() {
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", youChosePaper);
}

function startAnimationScissors() {
  player.classList.add("shake");
  computer.classList.add("shake");
  player.addEventListener("animationend", youChoseScissors);
}

function youChoseRock() {
  console.log("you chose rock");

  userChoice = 0;

  player.classList.remove("shake");
  computer.classList.remove("shake");
  player.classList.add("rock");

  if (computerChoice == userChoice) {
    computer.classList.add("rock");
    drawScreen();
  } else if (computerChoice == 1) {
    computer.classList.add("paper");
    loseScreen();
  } else if (computerChoice == 2) {
    win.classList.remove(".hidden");
    computer.classList.add("scissors");
    winScreen();
  }
}

function youChosePaper() {
  console.log("you chose paper");
  userChoice = 1;

  player.classList.remove("shake");
  computer.classList.remove("shake");
  player.classList.add("paper");

  if (computerChoice == userChoice) {
    computer.classList.add("paper");
    drawScreen();
  } else if (computerChoice == 0) {
    computer.classList.add("rock");
    winScreen();
  } else if (computerChoice == 2) {
    computer.classList.add("scissors");
    loseScreen();
  }
}

function youChoseScissors() {
  console.log("you chose scissors");
  userChoice = 2;

  player.classList.remove("shake");
  computer.classList.remove("shake");
  player.classList.add("scissors");

  if (computerChoice == userChoice) {
    computer.classList.add("scissors");
    drawScreen();
  } else if (computerChoice == 0) {
    computer.classList.add("rock");
    loseScreen();
  } else if (computerChoice == 1) {
    computer.classList.add("paper");
    winScreen();
  }
}

function drawScreen() {
  console.log("it was a tie");
  draw.classList.remove("hidden");
}

function loseScreen() {
  console.log("you lose");
  lose.classList.remove("hidden");
}

function winScreen() {
  console.log("you win");
  win.classList.remove("hidden");
}
