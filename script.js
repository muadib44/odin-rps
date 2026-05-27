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

function playRound() {
    
}