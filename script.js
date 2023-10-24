let computerScore = 0;
let userScore = 0;





function playRound() {
  function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3)
  
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

  let computerSelection = getComputerChoice();
  console.log('computer choice: ', computerSelection);

  function getUserChoice() {
    let playerInput = prompt('Chose ‘Rock’, ‘Paper’ or ‘Scissors’:').toLowerCase();
    return playerInput;
  }

  const playerSelection = getUserChoice();
  console.log('player choice: ', playerSelection);

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
    console.log(playRound());
  }
  console.log('Computer score:' ,computerScore, 'User score:', userScore);
  if (computerScore > userScore) {
    console.log('Computer wins the game!');
  } else if (computerScore < userScore) {
    console.log('User wins the game!');
  } else console.log('Total tie in the game!');
}

game();


// let computerScore = 0;
// let userScore = 0;

// function getComputerChoice() {
//   let randomNumber =  Math.floor(Math.random() * 3)

//   if (randomNumber === 0) {
//     return 'rock';
//   } else if (randomNumber === 1) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

// let computerSelection = getComputerChoice();
// console.log('computer choice: ', computerSelection);

// function getUserChoice() {
//   let playerInput = prompt('Chose ‘Rock’, ‘Paper’ or ‘Scissors’:').toLowerCase();
//   return playerInput;
// }

// const playerSelection = getUserChoice();
// console.log('player choice: ', playerSelection);

// function playRound(computerSelection, playerSelection) {

//   if (computerSelection === playerSelection) {
//     return "Tie!"

//   } else if (computerSelection === 'rock' && playerSelection ==='scissors') {
//     computerScore++;
//     return "You Lose! Rock beats scissors";
//   } else if (computerSelection === 'rock' && playerSelection ==='paper') {
//     userScore++;
//     return "You Win! Paper beats rock";
//   } else if (computerSelection === 'paper' && playerSelection ==='rock') {
//     computerScore++;
//     return "You Lose! Paper beats rock";
//   } else if (computerSelection === 'paper' && playerSelection ==='scissors') {
//     userScore++;
//     return "You Win! Scissors beats paper";
//   } else if (computerSelection === 'scissors' && playerSelection ==='paper') {
//     computerScore++;
//     return "You Lose! Scissors beats paper";
//   } else if (computerSelection === 'scissors' && playerSelection ==='rock') {
//     userScore++;
//     return "You Won! Rock beats scissors";
//   }
// }

// function game() {
//   for (i = 0; i < 5; i++) {
//     console.log(playRound(computerSelection, playerSelection));
//   }
//   console.log(computerScore, userScore);
// }

// game();
