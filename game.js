function getComputerChoice() {
    const weapon = ["rock", "paper", "scissors"];
    let m = weapon.length; //number of items in array
    let num = Math.floor(Math.random() * m); 
    return weapon[num];
}


console.log(getComputerChoice());