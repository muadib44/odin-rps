//this is a rock paper scissors game.
//the first thing to do is to create an array for the options.

const rps = ["Rock","Paper","Scissors"];
//then we create a function that lets the computer make a choice from the available options.



function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

//create variables to store the scores of the game
let humanScore = 0;
let computerScore = 0;

//create the main game function

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
