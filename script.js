function getComputerChoice() {    
    return Math.floor(Math.random() * 3) + 1;
} 

function getPlayerChoice() {
    return prompt("Select Rock, Paper or Scissors: ").toLowerCase();
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
        console.log("Option not available");
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

function game(repeat = 1) {
    let i;
    let result;
    let computerScore = 0;
    let playerScore = 0;

    for(i = 0; i < repeat; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        if(typeof result != null && typeof result != undefined) {
            switch(result) {
                case -1:
                    computerScore++;
                    break;
                case 1:
                    playerScore++;
                    break;
                default:
                    break;
            }
        } else {
            return;
        }
    }

    return (playerScore > computerScore) ? "Player wins!" : (playerScore === computerScore) ? "No one wins!" : "Computer wins!";
}

console.log(game(5));