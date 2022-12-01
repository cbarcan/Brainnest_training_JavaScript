// Function that capitalizes the first letter
const capitalizeFirstLetter = string => (string && string[0].toUpperCase() + string.slice(1)) || ""

// Function where computer chooses random between rock, paper and scissors
const computerPlay = () => {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    default:
      return "scissors"
  }
}

// Function where the player chooses between rock, paper and scissors
const playerPlay = (round) => {
  let playerSelection = prompt(`Round ${round + 1}!\nPick Rock, Paper or Scissors!`);
  while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors") {
    playerSelection = prompt(`Round ${round + 1}!\nTry again! You need to pick between rock, paper or scissors.`);
  }
  return playerSelection.toLowerCase()
}

// Initial function that the assignment told us to do
// let playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === computerSelection) {
//     return "The game is a draw!"
//   } else {
//     switch (playerSelection) {
//       case "rock":
//         switch (computerSelection) {
//           case "paper":
//             return "You Lose! Paper beats Rock.";
//           default:
//             return "You Win! Rock beats Scissors.";
//         }
//       case "paper":
//         switch (computerSelection) {
//           case "scissors":
//             return "You Lose! Scissors beats Paper.";
//           default:
//             return "You Win! Paper beats Rock.";
//         }
//       default:
//         switch (computerSelection) {
//           case "rock":
//             return "You Lose! Rock beats Scissors.";
//           default:
//             return "You Win! Scissors beats Paper.";
//         }
//     }
//   }
// }

// Function that plays one round and returns 0 for draw, 1 for win or -1 for loss
const playRound = (playerSelection, computerSelection) =>
  playerSelection === computerSelection
  ?
  0
  :
  playerSelection === "rock" && computerSelection === "paper"
    ||
    playerSelection === "paper" && computerSelection === "scissors"
    ||
    playerSelection === "scissors" && computerSelection === "rock"
  ?
  -1
  :
  1

// Funcition for playing one game of 5 rounds
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Rock Paper Scissors");
  for (let i = 0; i < 5; i++) {
    // const playerSelection = computerPlay();
    const playerSelection = playerPlay(i);
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(`\nRound ${i + 1}:`);
    if (roundResult === 0) {
      console.log("This round is a draw!");
    } else if (roundResult === -1) {
      console.log(`You lose this round! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`);
      computerScore++;
    } else {
      console.log(`You win this round! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`);
      playerScore++;
    }
    console.log(`The score is Player ${playerScore} - ${computerScore} Computer`);
  }
  if (playerScore === computerScore) {
    console.log(`\nThe game is draw! \nPlayer ${playerScore} - ${computerScore} Computer`);
  } else if (playerScore > computerScore) {
    console.log(`\nYou WON! \nPlayer ${playerScore} - ${computerScore} Computer`);
  } else {
    console.log(`\nYou LOST! \nPlayer ${playerScore} - ${computerScore} Computer`)
  }
}

//Function for playing again
const playAgain = () => {
  let again = prompt("Do you want to play again?\nType YES or anythings else for NO!");
  if (again.toLowerCase() === "yes") {
    console.clear();
    game();
    playAgain();
  } else {
    console.log("\nGAME OVER")
  }
}

game();
playAgain();
