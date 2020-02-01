let rock = document.getElementById("rock").onclick = user;
let paper = document.getElementById("paper").onclick = user;
let scissors = document.getElementById("scissors").onclick = user;

function user(){
    let userChoice = this.id;
    console.log("User: " + userChoice)
}