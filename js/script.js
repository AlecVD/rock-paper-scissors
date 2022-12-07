console.log("Rock Paper Scissors Game")

const choices = ["Rock","Paper","Scissors"]
var computerWins = 0
var playerWins = 0

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

document.getElementById("rock").onclick = function(){playerChoice("Rock")}
document.getElementById("paper").onclick = function(){playerChoice("Paper")}
document.getElementById("scissors").onclick = function(){playerChoice("Scissors")}

function playRound(playerChoice,computerChoice){
    switch(true){
        case playerChoice === computerChoice:
            return "Tie";
            break;
        case playerChoice === "Rock" && computerChoice === "Scissors":
        case playerChoice === "Paper" && computerChoice === "Rock":
        case playerChoice === "Scissors" && computerChoice === "Paper":
            playerWins += 1
            return "Player Wins"
            break;
        case playerChoice === "Rock" && computerChoice === "Paper":
        case playerChoice === "Paper" && computerChoice === "Scissors":
        case playerChoice === "Scissors" && computerChoice === "Rock":
            computerWins += 1
            return "Computer Wins"
            break;
        default:
            console.log("?")
    }
}

function playerChoice(choice){
    var computer = getComputerChoice()
    var result = playRound(choice,computer)
    document.getElementById("result").innerHTML = "Result: " + result;
    document.getElementById("player").innerHTML = "Player Choice: " + choice;
    document.getElementById("computer").innerHTML = "Computer Choice: " + computer;
    document.getElementById("score").innerHTML = "Player: " + playerWins + " Computer: " + computerWins
}
//console.log(playRound(getPlayerChoice(),getComputerChoice()))