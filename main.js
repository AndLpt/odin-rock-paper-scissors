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


  function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanCHoice = humanChoice.toLowerCase();
        if (humanCHoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++; 
        }else if (humanCHoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++; 
        }else if (humanCHoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++; 
        }else if (humanCHoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore++; 
        }else if (humanCHoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! ROck beats scissors");
            computerScore++; 
        }else if (humanCHoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++; 
        }else {
            console.log("It's a tie");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(humanCHoice(), computerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    }else if (humanScore < computerScore) {
        console.log("You lost");
    }else {
        console.log("It's a tie");
    }
  }

  playGame();