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


let humanCHoice = function getHumanChoice() {
    return prompt("Make your choice");
};

let computerScore = 0;
let humanScore = 0;
let divResult = document.createElement("div");

function playRound(humanChoice, computerChoice) {
  let humanCHoice = humanChoice.toLowerCase();
  if (humanCHoice == "rock" && computerChoice == "paper") {
      divResult.textContent = "You lose! Paper beats Rock";
      computerScore++; 
  }else if (humanCHoice == "rock" && computerChoice == "scissors") {
    divResult.textContent = "You win! Rock beats scissors";
      humanScore++; 
  }else if (humanCHoice == "paper" && computerChoice == "rock") {
    divResult.textContent = "You win! Paper beats rock";
      humanScore++; 
  }else if (humanCHoice == "paper" && computerChoice == "scissors") {
    divResult.textContent = "You lose! Scissors beats paper";
      computerScore++; 
  }else if (humanCHoice == "scissors" && computerChoice == "rock") {
    divResult.textContent = "You lose! Rock beats scissors";
      computerScore++; 
  }else if (humanCHoice == "scissors" && computerChoice == "paper") {
    divResult.textContent = "You win! Scissors beats paper";
      humanScore++; 
  }else {
    divResult.textContent = "It's a tie";
  }

  document.body.appendChild(divResult);
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




