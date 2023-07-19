const btns = document.querySelectorAll("button");
const counterForComputer = 0;
const counterForUser = 0;
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
    }
    else if( playerSelection === "paper" && computerSelection === "rock" ){
        console.log("Paper beats Rock. You win.");
    }
    else if( playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Rock beats Scissor. You lose");
    } 
    else if( playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock beats Scissors. You win.");
    }
    else if( playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Scissors beats Paper. You lose");
    }
    else if( playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors beats Paper. You win");
    }
}
  console.log(playRound(userChoice,getComputerChoice()));
}));