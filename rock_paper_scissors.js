let humanScore = 0;
let computerScore = 0;

function humanWin() {
 console.log("You win !");
 humanScore++;
}

function computerWin() {
 console.log("You loose !")
 computerScore++;
}

function getComputerChoice() {
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

function getHumanChoice() {
 return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
 humanChoice = getHumanChoice();
 computerChoice = getComputerChoice(); 
 if (getHumanChoice == getComputerChoice) {
  console.log("It's a draw! Play again");
 }
 else if (getHumanChoice == "rock" && getComputerChoice == "scissors")
 {
  humanWin();
 }
 else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
  humanWin();
 }
 else if (getHumanChoice == "scissors" && getComputerChoice == "paper") {
  humanWin();
 }
 else {
  computerWin();
 }

 console.log(humanChoice);
 console.log(computerChoice)
}
