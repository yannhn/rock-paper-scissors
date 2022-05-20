// Starting score
let playerScore = 0;
let computerScore = 0;

//overall game function
function game() {
  // loops trough five rounds of the game
  for (let i = 0; i < 5; i++) {
    // function defining the command of the computer
    function computerPlay() {
      let choices = ["rock", "paper", "scissors"];
      let randomChoices = choices[Math.floor(Math.random() * choices.length)];
      return randomChoices;
    }

    let computerSelection = computerPlay();

    // function defining the command of the player
    function playerPlay() {
      playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      return playerSelection;
    }

    playerSelection = playerPlay();

    // defining what happens every round
    function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase();
      if (playerSelection === "rock" && computerSelection === "paper") {
        playerScore++;
        console.log(
          `You Lose! Paper beats Rock
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        playerScore++;
        console.log(
          `You Lose! Scissors beats Paper
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
            Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        playerScore++;
        console.log(
          `You Lose! Rock beats Scissors
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        computerScore++;
        console.log(
          `You Win! Rock beats Scissors
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        computerScore++;
        console.log(
          `You Win! Scissors beats Paper
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        computerScore++;
        console.log(
          `You Win! Paper beats Rock 
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
        );
      } else {
        console.log(
          `Draw!
        Player chose: ${playerSelection} Computer chose: ${computerSelection} 
        Player score: ${playerScore} Computer score: ${computerScore}`
        );
      }
    }
    //call function
    playRound(playerSelection, computerSelection);
  }
}

//call game function
game();
