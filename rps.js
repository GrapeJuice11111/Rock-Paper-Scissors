counterForComputer = 0;
counterForPlayer = 0;

// This function generates a random number upto 3 and picks a string out from Array  
function getComputerChoice(){
let choices = ["rock","paper","scissors"];
computerChoice = choices[Math.floor(Math.random() * 3)]; 
return computerChoice;
}






// This function will ask a input from user with prompt. The input will be case insensitive as we will use a function called toUpperCase()



/*This function will play five rounds of rock paper scissors with if else conditionals
with paraments (playerSelection and computerSelection)                                                                                                         
*/
function game(){
while(true){
    if( counterForComputer === 3 || counterForPlayer === 3){
        break;
    }
    function playRound(playerSelection,computerSelection){
if( playerSelection === computerSelection ){
    return "Draw. They both are the same thing";
}
else if( playerSelection === "rock" && computerSelection === "paper"){
    counterForComputer = counterForComputer + 1;
    return "Paper beats Rock. You lose.";
}
else if( playerSelection === "paper" && computerSelection === "rock" ){
    counterForPlayer = counterForPlayer + 1;
    return "Paper beats Rock. You win.";
}
else if( playerSelection === "scissors" && computerSelection === "rock"){
    counterForComputer = counterForComputer + 1;
    return "Rock beats Scissor. You lose";
} 
else if( playerSelection === "rock" && computerSelection === "scissors"){
    counterForPlayer = counterForPlayer + 1;
    return "Rock beats Scissors. You win.";
}
else if( playerSelection === "paper" && computerSelection === "scissors"){
    counterForComputer = counterForComputer + 1;
    return "Scissors beats Paper. You lose";
}
else if( playerSelection === "scissors" && computerSelection === "paper"){
    counterForPlayer = counterForPlayer + 1;
    return "Scissors beats Paper. You win";
}
}
const playerSelection = getUsersChoice;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
}


if (counterForComputer === 3) {
console.log("The computer has won. Dont worry Player is smarter than computer.");
}
else if(counterForPlayer === 3){
console.log("The Player has won. Congratulations")
}

}
game();

