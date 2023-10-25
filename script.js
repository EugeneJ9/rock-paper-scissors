let computerScore = 0;
let userScore = 0;

function playRound() {
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

  if (computerSelection === playerSelection) {
    return "Tie!"

  } else if (computerSelection === 'rock' && playerSelection ==='scissors') {
      computerScore++;
      return "You Lose! Rock beats scissors";
  } else if (computerSelection === 'rock' && playerSelection ==='paper') {
      userScore++;
      return "You Win! Paper beats rock";
  } else if (computerSelection === 'paper' && playerSelection ==='rock') {
      computerScore++;
      return "You Lose! Paper beats rock";
  } else if (computerSelection === 'paper' && playerSelection ==='scissors') {
      userScore++;
      return "You Win! Scissors beats paper";
  } else if (computerSelection === 'scissors' && playerSelection ==='paper') {
      computerScore++;
      return "You Lose! Scissors beats paper";
  } else if (computerSelection === 'scissors' && playerSelection ==='rock') {
      userScore++;
      return "You Won! Rock beats scissors";
  }
}


function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound())
  }
  console.log('Total computer score: ', computerScore,', total user score: ', userScore);
  if (userScore > computerScore) {
    console.log('You WIN the game!');
  } else if (userScore < computerScore) {
    console.log('You LOSE the game!');
  } else {
    console.log('Total TIE!');
  }
}

game();
