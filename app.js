//function defining the command of the player
function playerPlay() {
  console.log("test");
}

playerSelection = playerPlay();

// Rock
const btn_rock = document.querySelector(".btn_rock");
btn_rock.addEventListener("click", playerPlay);

// // Paper
const btn_paper = document.querySelector(".btn_paper");
btn_paper.addEventListener("click", playerPlay);

// // Scissors
const btn_scissors = document.querySelector(".btn_scissors");
btn_scissors.addEventListener("click", playerPlay);

// Starting score
let playerScore = 0;
let computerScore = 0;

//overall game function
function game() {
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
      console.log(
        `You Lose! Paper beats Rock
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
      console.log(
        `You Lose! Scissors beats Paper
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
            Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      console.log(
        `You Lose! Rock beats Scissors
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      console.log(
        `You Win! Rock beats Scissors
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      console.log(
        `You Win! Scissors beats Paper
          Player chose: ${playerSelection} Computer chose: ${computerSelection} 
          Player score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
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
  // playRound(playerSelection, computerSelection);
}

//call game function
game();
