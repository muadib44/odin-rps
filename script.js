const roundResult = document.getElementById("round-result");
const finalScore = document.getElementById("final-score");
let humanSelection = "";
let computerSelection = "";
const rps = ["Rock","Paper","Scissors"];


function getPlayerChoice(choice) {
    humanSelection = choice;
}

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

let humanScore = 0;
let computerScore = 0;

//create the main game function

function playRound(humanChoice,computerChoice) {

    if (humanChoice === computerChoice) {
        roundResult.innerText = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++
        roundResult.innerText = `You win! ${humanChoice} beats ${computerChoice} | Score: You: ${humanScore}, Computer: ${computerScore}`;
    } else {
        computerScore++;
        roundResult.innerText = `You lose! ${computerChoice} beats ${humanChoice} | Score: You: ${humanScore}, Computer: ${computerScore}`;
    }

    if (humanScore === 5) {
        finalScore.innerText = `Final Score - You: ${humanScore}, Computer: ${computerScore}. You win!!! 🤩`;
    } else if (computerScore === 5) {
        finalScore.innerText = `Final Score - You: ${humanScore}, Computer: ${computerScore}. You lose!!! 😞`;
    } else {
        finalScore.innerText = `Score - You: ${humanScore}, Computer: ${computerScore}. First to 5 wins!`;
    }

}

function playGame() {
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult.innerText = `Choose your option and press "Play Game"!`;
    finalScore.innerText = "Play 1 round to see the scores!";
    humanSelection = "";
    computerSelection = "";
}
