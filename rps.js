const btns = document.querySelectorAll("button");
const counterForComputer = 0;
const counterForPlayer = 0;
btns.forEach(button => button.addEventListener('click', function(e){
var userChoice = ""
userChoice = this.classList.value;
console.log(userChoice);
   function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]; 
    return computerChoice;
   }
   function playRound(playerSelection,computerSelection){
    if( playerSelection === computerSelection ){
        console.log("Draw. They both are the same thing");
    }
    else if( playerSelection === "rock" && computerSelection === "paper"){
        console.log("Paper beats Rock. You lose.");
        counterForComputer = counterForComputer + 1;
    }
    else if( playerSelection === "paper" && computerSelection === "rock" ){
        console.log("Paper beats Rock. You win.");
        counterForPlayer = counterForPlayer + 1;

    }
    else if( playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Rock beats Scissor. You lose");
        counterForComputer = counterForComputer + 1;
    } 
    else if( playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock beats Scissors. You win.");
        counterForPlayer = counterForPlayer + 1;
    }
    else if( playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Scissors beats Paper. You lose");
        counterForComputer = counterForComputer + 1;
    }
    else if( playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors beats Paper. You win");
        counterForPlayer = counterForPlayer + 1;
    }
}
  console.log(playRound(userChoice,getComputerChoice()));
}));