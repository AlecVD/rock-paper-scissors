console.log("Rock Paper Scissors Game")

const choices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(){
    choice = ""
    while(!choices.includes(choice)){
        choice = prompt("Input your Choice")
    }
    return choice
}

//console.log(getComputerChoice());
//console.log(getPlayerChoice());

function playRound(playerChoice,computerChoice){
    console.log("playerChoice: "+playerChoice)
    console.log("computerChoice: "+computerChoice)
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

console.log(playRound(getPlayerChoice(),getComputerChoice()))