// Score
const actualPlayerScore = document.querySelector(
  "[data-js='number_playerScore']"
);
const actualComputerScore = document.querySelector(
  "[data-js='number_computerScore']"
);

let playerScore = 0;
let computerScore = 0;

function updatePlayerScore() {
  actualPlayerScore.textContent = playerScore;
}

function updateComputerScore() {
  actualComputerScore.textContent = computerScore;
}

// End of Game
function endGame() {
  if (computerScore === 5 || playerScore === 5) {
    if (playerScore > computerScore) {
      alert(
        `You won! The computer scored: ${computerScore} You scored: ${playerScore}. Congratulations!`
      );
      resetScore();
    } else {
      alert(
        `You lost! The computer scored:: ${computerScore} You scored: ${playerScore}.`
      );
      resetScore();
    }
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

// EventListeners
// Rock
const btn_rock = document.querySelector("[data-js='btn_rock']");
btn_rock.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updatePlayerScore();
  updateComputerScore();
});

// Paper
const btn_paper = document.querySelector("[data-js='btn_paper']");
btn_paper.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updatePlayerScore();
  updateComputerScore();
});

// Scissors
const btn_scissors = document.querySelector("[data-js='btn_scissors']");
btn_scissors.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updatePlayerScore();
  updateComputerScore();
});

// function defining the command of the computer
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}

let computerSelection = computerPlay();

// defining what happens every round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
  } else {
  }
  endGame();
}
