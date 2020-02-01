let rock = document.getElementById("rock").onclick = user;
let paper = document.getElementById("paper").onclick = user;
let scissors = document.getElementById("scissors").onclick = user;

function user(){
    let userPick = this.id;
    console.log("User: " + userPick)

    let computerPick = Math.random();
    if (computerPick < 0.25) {
        computerPick = "rock";
    }else if (computerPick <= 0.6) {
        computerPick = "paper";
    }else{
        computerPick = "scissors";

    };

    console.log("Computer: "+ computerPick);
}