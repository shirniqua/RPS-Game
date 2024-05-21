

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

/** First function
function playRound (humanScore, computerScore) {
    let comChoice = getComputerChoice();
    let humChoice = getHumanChoice();
    humChoice = humChoice.toLowerCase();
    if (comChoice == humChoice){
        console.log("Draw! You both chose " + comChoice);
    }
    else if (((comChoice == "paper") && (humChoice == "rock")) || ((comChoice == "rock") && (humChoice == "scissors")) || ((comChoice == "scissors") && (humChoice == "paper"))){
        console.log("You lose! " +comChoice + " beats " +humChoice);
        computerScore += 1;
        return computerScore;
    }
    else {
        console.log("You win! " +humChoice +" beats " +comChoice);
        humanScore += 1;
        return humanScore;
    }
}**/

function playRound () {
    let comChoice = getComputerChoice();
    let humChoice = getHumanChoice();
    humChoice = humChoice.toLowerCase();
    let decision = 0;
    if (comChoice == humChoice){
        console.log("Draw! You both chose " + comChoice);
        return decision;
    }
    else if (((comChoice == "paper") && (humChoice == "rock")) || ((comChoice == "rock") && (humChoice == "scissors")) || ((comChoice == "scissors") && (humChoice == "paper"))){
        console.log("You lose! " +comChoice + " beats " +humChoice);
        decision = 1;
        return decision;
    }
    else {
        console.log("You win! " +humChoice +" beats " +comChoice);
        decision = 2;
        return decision;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let n = 0;
    for (let i = 0; i < 5; i++ ) {
        n ++;
        console.log("Game " + n + " results:");
        let win = playRound();
        if (win == 0) {
            continue;
        }
        else if (win == 1){
            computerScore ++;
        }
        else {
            humanScore ++;
        }
    }
    if (computerScore > humanScore){
        console.log("Computer won the overall game! Score: " +computerScore);
    }
    else {
        console.log("You won the overall game! Score: " +humanScore);
    }
}

console.log(playGame());
