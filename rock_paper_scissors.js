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
 return prompt("Choose Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {
 humanChoice = getHumanChoice().toLowerCase();
 computerChoice = getComputerChoice(); 
 if (humanChoice == computerChoice) {
  console.log(`${humanChoice} vs ${computerChoice}. It's a draw! Play again`);
 }
 else if (humanChoice == "rock" && computerChoice == "scissors")
 {
  console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
  humanScore++;
 }
 else if (humanChoice == "paper" && computerChoice == "rock") {
 console.log(`You win ! ${humanChoice} beat ${computerChoice}` );
 humanScore++;
 }
 else if (humanChoice == "scissors" && computerChoice == "paper") {
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
  console.log(`Game over... Final score : ${humanScore} - ${computerScore}`)
 }
};

playGame();
