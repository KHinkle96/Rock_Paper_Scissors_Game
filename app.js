let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.addEventListener("click", rockevent);
function rockevent() {
    rock.style.color = "green";
    rock.innerHTML = "You picked rock"
}

paper.addEventListener("click", paperevent);
function paperevent() {
    paper.style.color = "green";
    paper.innerHTML = "You picked paper"
}

scissors.addEventListener("click", scissorevent);
function scissorevent() {
    scissors.style.color = "green";
    scissors.innerHTML = "You picked scissors"
}