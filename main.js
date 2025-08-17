let computerChoice= function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return "rock";
    } else if(number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};



let computerScore = 0;
let humanScore = 0;
let divResult = document.createElement("div");
let pRunningScore = document.createElement("p");
let pMessage = document.createElement("p");
divResult.appendChild(pMessage);

pRunningScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
divResult.appendChild(pRunningScore);
document.body.appendChild(divResult);

function playRound(humanChoice, computerChoice) {
  let humanCHoice = humanChoice.toLowerCase();
  let message = "";

  if (humanCHoice == "rock" && computerChoice == "paper") {
    message = "You lose! Paper beats Rock";
    computerScore++; 
  }else if (humanCHoice == "rock" && computerChoice == "scissors") {
    message = "You win! Rock beats scissors";
      humanScore++; 
  }else if (humanCHoice == "paper" && computerChoice == "rock") {
    message = "You win! Paper beats rock";
      humanScore++; 
  }else if (humanCHoice == "paper" && computerChoice == "scissors") {
    message = "You lose! Scissors beats paper";
      computerScore++; 
  }else if (humanCHoice == "scissors" && computerChoice == "rock") {
    message = "You lose! Rock beats scissors";
      computerScore++; 
  }else if (humanCHoice == "scissors" && computerChoice == "paper") {
    message = "You win! Scissors beats paper";
      humanScore++; 
  }else {
    message = "It's a tie";
  }
  
  pMessage.textContent = message;
  pRunningScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;

  if (computerScore === 5 || humanScore === 5) {
    let pWinner = document.createElement("p");
    pWinner.textContent = computerScore === 5 ? "You lost!" : "You won!";
    divResult.appendChild(pWinner); 

  }

}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function(e) {
  playRound("rock", computerChoice());
});

paperButton.addEventListener("click", function(e) {
  playRound("paper", computerChoice());
});

scissorsButton.addEventListener("click", function(e) {
  playRound("scissors", computerChoice());
});




