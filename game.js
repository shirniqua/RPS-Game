let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const weapon = ["rock", "paper", "scissors"];
    let m = weapon.length; //number of items in array
    let num = Math.floor(Math.random() * m); 
    return weapon[num];
}

function getHumanChoice () {
    let choice = prompt("Choose your weapon (rock, paper or scissors)");
    return choice;
}

function playRound (getComputerChoice, getHumanChoice) {
    let comChoice = getComputerChoice();
    let humChoice = getHumanChoice();
    humChoice = humChoice.toLowerCase();
}

