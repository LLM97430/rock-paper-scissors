const getComputerChoice = () => {
 let computerChoice = Math.floor(Math.random()*3);
 if (computerChoice == 0) {
  console.log("Rock");
 }
 else if (computerChoice == 1) {
  console.log("Paper");
 }
 else {
  console.log("Scissors")
 }
}
getComputerChoice();

const getHumanChoice = () => {
 humanChoice = prompt("Choose Rock, Paper or Scissors");
 console.log(humanChoice)
}

getHumanChoice();