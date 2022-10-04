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
    let result;       // lost: -1; tie: 0; win: 1

    // Player enter wrong option
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Option not available";
    }

    // Computer chooses ROCK
    if(computerSelection === 1) {
        switch(playerSelection) {
            case "rock":
                console.log(tie);
                result = 0;
                return result;
                break;
            case "paper":
                console.log(`${won} ${paper_rock}`);
                result = 1;
                return result;
                break;
            case "scissors":
                console.log(`${lost} ${rock_scissors}`);
                result = -1;
                return result;
                break;
        }
    }
    // Computer chooses PAPER
    if(computerSelection === 2) {
        switch(playerSelection) {
            case "rock":
                console.log(`${lost} ${paper_rock}`);
                result = -1;
                return result;
                break;
            case "paper":
                console.log(tie);
                result = 0;
                return result;
                break;
            case "scissors":
                console.log(`${won} ${scissors_paper}`);
                result = 1;
                return result;
                break;
        }
    }
    // Computer chooses SCISSORS
    if(computerSelection === 3) {
        switch(playerSelection) {
            case "rock":
                console.log(`${won} ${rock_scissors}`);
                result = 1;
                return result;
                break;
            case "paper":
                console.log(`${lost} ${scissors_paper}`);
                result = -1;
                return result;
                break;
            case "scissors":
                console.log(tie);
                result = 0;
                return result;
                break;
        }
    }
}

const playerSelection = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
const computerSelection = getComputerChoice(); 