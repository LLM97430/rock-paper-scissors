//I create the variables at beginning of the code to make sure they can be used in different functions.
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const buttonsContainer = document.querySelector("#buttons-container");
const userScoreDisplay = document.querySelector(".user-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const display = document.querySelector("#display-content");

function winMessage(result) {
  if (humanScore == 5) {
    display.removeChild(buttonsContainer);
    let winner = document.createElement("div");
    winner.classList.add("winner");
    winner.textContent = "Congratulations ! You win :D"
    display.appendChild(winner);
  }
  else if (computerScore == 5) {
    display.removeChild(buttonsContainer);
    let winner = document.createElement("div");
    winner.classList.add("winner");
    winner.textContent = "You lose. Game over...";
    display.appendChild(winner);
  }
}

//I create two functions that will be used depending if the user win or lose because the cases will be repeated. 
function humanWin(playerSelection, computerSelection) {
  humanScore++;
  userScoreDisplay.textContent = humanScore;
  return (`You win ! ${playerSelection} beat ${computerSelection}`);
}

function computerWin(playerSelection, computerSelection) {
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
  return (`You loose ! ${playerSelection} beat ${computerSelection}`);
}

function getComputerChoice() { //This function affect a random number to the variable "rock", "paper" and "scissors"
  let randomNumber = Math.floor(Math.random()*3);
  if (randomNumber == 0) {
  return "rock";
  } 
  else if (randomNumber == 1) {
  return "paper";
  }
  else {
  return "scissors";
  }
}

//The toLowerCase will help comparing the human and the computer choices 
function playRound(playerSelection, computerSelection) {
  result = document.createElement("div");
  result.classList.add("result");

  if (playerSelection === computerSelection) {
  result.textContent = `${playerSelection} vs ${computerSelection}. It's a draw! Play again`;
  }
  else if (
  (playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "paper" && computerSelection == "rock") || 
  (playerSelection == "scissors" && computerSelection == "paper")
  ) 
  {result.textContent = humanWin(playerSelection, computerSelection)}
  else 
  {result.textContent = computerWin(playerSelection, computerSelection)}

  buttonsContainer.appendChild(result);
  winMessage(result);
};


function playGame() {
  buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection, button);
    }
  )})
};

playGame();