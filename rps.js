const btns = document.querySelectorAll("button");
let counterForComputer = 0;
let counterForPlayer = 0;
btns.forEach(button => button.addEventListener('click', function(e){
     var userChoice = ""
   userChoice = this.classList.value;
   if (counterForComputer >= 5 || counterForPlayer >= 5 )
   {
    pick.textContent = ""
   }
   else{
    pick.textContent = `You chose ${userChoice}`;
   }
    function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]; 
    var choice = "";
    choice = computerChoice;
    return choice;
   }
   function playRound(playerSelection,computerSelection){
    if( playerSelection === computerSelection ){
        div.textContent = "Draw. They both are the same thing";
    }
    else if( playerSelection === "rock" && computerSelection === "paper"){
        div.textContent = "Paper beats Rock. You lose.";
        counterForComputer = counterForComputer + 1;
    }
    else if( playerSelection === "paper" && computerSelection === "rock" ){
        div.textContent = "Paper beats Rock. You win.";
        counterForPlayer = counterForPlayer + 1;

    }
    else if( playerSelection === "scissors" && computerSelection === "rock"){
        div.textContent = "Rock beats Scissor. You lose";
        counterForComputer = counterForComputer + 1;
    } 
    else if( playerSelection === "rock" && computerSelection === "scissors"){
        div.textContent = "Rock beats Scissors. You win.";
        counterForPlayer = counterForPlayer + 1;
    }
    else if( playerSelection === "paper" && computerSelection === "scissors"){
        div.textContent = "Scissors beats Paper. You lose";
        counterForComputer = counterForComputer + 1;
    }
    else if( playerSelection === "scissors" && computerSelection === "paper"){
        div.textContent = "Scissors beats Paper. You win";
        counterForPlayer = counterForPlayer + 1;
    }
} 
 if(counterForComputer < 5 || counterForComputer < 5){
    playRound(userChoice,getComputerChoice());
  }
  else if(counterForComputer === 5) {
    div.textContent = "The computer has won. Humanity is done for.";
    }
    else if(counterForPlayer === 5){
    div.textContent = "The Player has won. Congratulations you saved us. You are the hero";
    }
}));



const div = document.querySelector(".results");
const pick = document.querySelector(".pick")
