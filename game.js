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
    if (comChoice == humChoice){
        console.log("Draw! You both chose " + comChoice);
    }
    else if (((comChoice == "paper") && (humChoice == "rock")) || ((comChoice == "rock") && (humChoice == "scissors")) || ((comChoice == "scissors") && (humChoice == "paper"))){
        console.log("You lose! " +comChoice + " beats " +humChoice);
        computerScore += 1;
    }
    else {
        console.log("You win! " +humChoice +" beats " +comChoice);
        humanScore += 1;
    }
}

