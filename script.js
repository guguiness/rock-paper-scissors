function getComputerChoice() {    
    return Math.floor(Math.random() * 3) + 1;
} 

const playerSelection = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
const computerSelection = getComputerChoice(); 

