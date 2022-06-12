// Score
const actualPlayerScore = document.querySelector(
  "[data-js='number_playerScore']"
);
const actualComputerScore = document.querySelector(
  "[data-js='number_computerScore']"
);
const tieScore = document.querySelector("[data-js='number_drawScore']");
const showTurn = document.querySelector("[data-js='showTurn']");
const showResult = document.querySelector("[data-js='showResult']");
const showRound = document.querySelector("[data-js='showRound']");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let round = 0;

function updatePlayerScore() {
  actualPlayerScore.textContent = playerScore;
}

function updateComputerScore() {
  actualComputerScore.textContent = computerScore;
}

function updateTieScore() {
  tieScore.textContent = drawScore;
}

// End of Game
function endGame() {
  if (computerScore === 5 || playerScore === 5) {
    if (playerScore > computerScore) {
      alert(
        `You win! The computer scored: ${computerScore} | You scored: ${playerScore}. Congratulations!`
      );
      resetScore();
    } else {
      alert(
        `You loose! The computer scored: ${computerScore} | You scored: ${playerScore}.`
      );
      resetScore();
    }
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  round = 0;
  showTurn.textContent = "Turn";
  showResult.textContent = `Result`;
  showRound.textContent = "Round";
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
  updateTieScore();
});

// Paper
const btn_paper = document.querySelector("[data-js='btn_paper']");
btn_paper.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updatePlayerScore();
  updateComputerScore();
  updateTieScore();
});

// Scissors
const btn_scissors = document.querySelector("[data-js='btn_scissors']");
btn_scissors.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updatePlayerScore();
  updateComputerScore();
  updateTieScore();
});

// Reset
const btn_reset = document.querySelector("[data-js='btn_reset']");
btn_reset.addEventListener("click", () => {
  resetScore();
  updatePlayerScore();
  updateComputerScore();
  updateTieScore();
  showTurn.textContent = "Turn";
  showResult.textContent = "Result";
  showRound.textContent = "Round";
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
  let playerSelect =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  let computerSelect =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You loose! ${computerSelect} beats ${playerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You loose! ${computerSelect} beats ${playerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You loose! ${computerSelect} beats ${playerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You win! ${playerSelect} beats ${computerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You win! ${playerSelect} beats ${computerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `You win! ${playerSelect} beats ${computerSelect}`;
    showRound.textContent = `Round: ${round}`;
  } else {
    drawScore++;
    round++;
    showTurn.textContent = `You: ${playerSelect} | Computer: ${computerSelect}`;
    showResult.textContent = `Draw!`;
    showRound.textContent = `Round: ${round}`;
  }
  endGame();
}
