function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';    
  } else if (randomNumber === 1) {
    return 'paper';    
  } else {
    return 'scissors';
  }
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

function getPlayerChoice() {
  let playerChoice = prompt("Please enter ‘Rock’, ‘Paper’ or ‘Scissors’").toLowerCase();
  return playerChoice;
}

let playerSelection = getPlayerChoice();
console.log(playerSelection);

function playRound() {
  if (computerSelection === playerSelection) {
    return "Tie!"

  } else if (computerSelection === 'rock' && playerSelection ==='scissors') {
    return "You Lose! Rock beats scissors";
  } else if (computerSelection === 'rock' && playerSelection ==='paper') {
    return "You Win! Paper beats rock";
  } else if (computerSelection === 'paper' && playerSelection ==='rock') {
    return "You Lose! Paper beats rock";
  } else if (computerSelection === 'paper' && playerSelection ==='scissors') {
    return "You Win! Scissors beats paper";
  } else if (computerSelection === 'scissors' && playerSelection ==='paper') {
    return "You Lose! Scissors beats paper";
  } else if (computerSelection === 'scissors' && playerSelection ==='rock') {
    return "You Won! Rock beats scissors";
  }
}

console.log(playRound(playerSelection, computerSelection))