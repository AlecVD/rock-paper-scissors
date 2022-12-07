console.log("Rock Paper Scissors Game")
alert("Rock Paper Scissors")

const choices = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

document.getElementById("rock").addEventListener("click",function(){playRound("Rock",getComputerChoice())})
document.getElementById("rock").addEventListener("click",function(){playRound("Rock",getComputerChoice())})
document.getElementById("rock").addEventListener("click",function(){playRound("Rock",getComputerChoice())})

function playRound(playerChoice,computerChoice){
    switch(true){
        case playerChoice === computerChoice:
            return "Tie";
            break;
        case playerChoice === "Rock" && computerChoice === "Scissors":
        case playerChoice === "Paper" && computerChoice === "Rock":
        case playerChoice === "Scissors" && computerChoice === "Paper":
            return "Player Wins"
            break;
        case playerChoice === "Rock" && computerChoice === "Paper":
        case playerChoice === "Paper" && computerChoice === "Scissors":
        case playerChoice === "Scissors" && computerChoice === "Rock":
            return "Computer Wins"
            break;
        default:
            console.log("?")
    }
}

//console.log(playRound(getPlayerChoice(),getComputerChoice()))