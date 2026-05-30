const roundResult = document.getElementById("round-result");
const finalScore = document.getElementById("final-score");
const humanChoice = document.getElementById("human-choice");
const computerChoice = document.getElementById("computer-choice");
const rps = ["Rock","Paper","Scissors"];




function getComputerChoice() {
    return computerChoice.innerText = rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    if (!rps.includes(humanChoice)) {
        return humanChoice.value = humanChoice.value.charAt(0).toUpperCase() + humanChoice.value.slice(1).toLowerCase();
    } else {
        return roundResult.innerText = "Incorrect Human Choice!!"
    }
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

    if (humanScore === 5 || computerScore === 5) {
        finalScore.innerText = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(getHumanChoice, getComputerChoice);
}
