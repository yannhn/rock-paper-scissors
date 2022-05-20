let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    function computerPlay() {
      let choices = ["rock", "paper", "scissors"];
      let randomChoices = choices[Math.floor(Math.random() * choices.length)];
      return randomChoices;
    }

    let computerSelection = computerPlay();

    function playerPlay() {
      playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      return playerSelection;
    }

    playerSelection = playerPlay();

    function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase();
      if (playerSelection === "rock" && computerSelection === "paper") {
        playerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Lose! Paper beats Rock";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        playerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Lose! Scissors beats Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        playerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Lose! Rock beats Scissors";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        computerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Win! Rock beats Scissors";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        computerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Win! Scissors beats Paper";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        computerScore++;
        console.log(
          `computer: ${computerSelection} player: ${playerSelection}
          Your score is ${playerScore} and the computer's score is ${computerScore}`
        );
        return "You Win! Paper beats Rock";
      } else {
        return "Draw!";
      }
    }

    playRound(playerSelection, computerSelection);
  }
}

game();
