function getComputerChoice() {    
    return Math.floor(Math.random() * 3) + 1;
} 

function playRound(playerSelection, computerSelection) {
    const tie = "It's a tie!";
    const won = "You Win!";
    const lost = "You Lose!";
    const paper_rock = "Paper beats Rock";
    const rock_scissors = "Rock beats Scissors";
    const scissors_paper = "Scissors beats Paper";

    // Player enter wrong option
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Option not available";
    }

    // Computer chooses ROCK
    if(computerSelection === 1) {
        switch(playerSelection) {
            case "rock":
                return tie;
                break;
            case "paper":
                return `${won} ${paper_rock}`;
                break;
            case "scissors":
                return `${lost} ${rock_scissors}`;
                break;
        }
    }
    // Computer chooses PAPER
    if(computerSelection === 2) {
        switch(playerSelection) {
            case "rock":
                return `${lost} ${paper_rock}`;
                break;
            case "paper":
                return tie;
                break;
            case "scissors":
                return `${won} ${scissors_paper}`;
                break;
        }
    }
    // Computer chooses SCISSORS
    if(computerSelection === 3) {
        switch(playerSelection) {
            case "rock":
                return `${won} ${rock_scissors}`;
                break;
            case "paper":
                return `${lost} ${scissors_paper}`;
                break;
            case "scissors":
                return tie;
                break;
        }
    }
}

const playerSelection = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));