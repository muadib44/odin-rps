const result = document.getElementById("result");
const humanChoice = document.getElementById("human-choice");
const computerChoice = document.getElementById("computer-choice");
const rps = ["Rock","Paper","Scissors"];




function getComputerChoice() {
    computerChoice.innerText = rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    humanChoice.innerText = humanChoice.value.charAt(0).toUpperCase() + humanChoice.value.slice(1).toLowerCase();
}


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

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    let result =`Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    result.innerText = result;
}

playGame();