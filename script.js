function getComputerChoice() {    
    return Math.floor(Math.random() * 3) + 1;
} 

const playerSelection = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
const computerSelection = getComputerChoice(); 

function playRound(playerSelection, computerSelection) {
    // Computer chooses ROCK
    if(computerSelection === 1) {

    }
    // Computer chooses PAPER
    if(computerSelection === 2) {
        
    }
    // Computer chooses SCISSORS
    if(computerSelection === 3) {

    }
}