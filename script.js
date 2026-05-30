const roundResult = document.getElementById("round-result");
const finalScore = document.getElementById("final-score");
const humanChoice = document.getElementById("human-choice");
const computerChoice = document.getElementById("computer-choice");
const rps = ["Rock","Paper","Scissors"];




function getComputerChoice() {
    return computerChoice.innerText = rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
     return humanChoice = humanChoice.value.charAt(0).toUpperCase() + humanChoice.value.slice(1).toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

//create the main game function

function playRound(humanChoice,computerChoice) {

    if (!rps.includes(humanSelection)) {
        roundResult.innerText = "You made an Invalid Choice!!"
    }

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
    } else {
        finalScore.innerText = `Final Score - You: ${humanScore}, Computer: ${computerScore}. You lose!!! 😞`;
    }
}

function playGame() {
    playRound(humanSelection, computerSelection);
}
