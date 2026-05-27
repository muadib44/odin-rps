//this is a rock paper scissors game.
//the first thing to do is to create an array for the options.

const rps = ["Rock","Paper","Scissors"];
//then we create a function that lets the computer make a choice from the available options.

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

