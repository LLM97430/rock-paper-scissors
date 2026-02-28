let humanScore = 0;
let computerScore = 0;

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
  console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
  humanScore++;
 }
 else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
 console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
 humanScore++;
 }
 else if (getHumanChoice == "scissors" && getComputerChoice == "paper") {
 console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
 humanScore++;
 }
 else {
 console.log(`You loose ! ${computerChoice} beat ${humanChoice}`)
 computerScore++;
 }
}

function humanWin() {
 console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
 humanScore++;
}

function playGame() {
 while(humanScore+computerScore < 5) {
  playRound();
  console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`)
 }
 if (humanScore>computerScore) {
  console.log(`Congratulations ! You win ! Final score : ${humanScore} - ${computerScore}`)
 }
 else {
  console.log(`Game over... Final score : ${computerScore} - ${humanScore}`)
 }
};

playGame();
