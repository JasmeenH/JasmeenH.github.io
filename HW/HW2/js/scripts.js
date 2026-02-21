// event listeners
document.querySelector("#play").addEventListener("click", game);
document.querySelector("#tryAgain").addEventListener("click", initializeGame);

let choices = ["Rock", "Paper", "Scissor"];

let playerScore = 0;
let computerScore = 0;

initializeGame();

function initializeGame() {
    playerScore = 0;
    computerScore = 0;

    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;

    document.querySelector("#playerChoiceDisplay").textContent = "-";
    document.querySelector("#computerChoiceDisplay").textContent = "-";

    document.querySelector("#scoreBoard").textContent = "";
    document.querySelector("#resultImg").src = "img/startGame.jfif";

    document.querySelector("#tryAgain").style.display = "none";
    document.querySelector("#play").style.display = "inline";

    let selected = document.querySelector("input[name='rps']:checked");
    if (selected) {
        selected.checked = false;
    }
}

function game() {
    let selected = document.querySelector("input[name='rps']:checked");

    if (!selected) {
        document.querySelector("#scoreBoard").textContent = "Please select an option!";
        document.querySelector("#scoreBoard").style.color = "red";
        resultImg.src = " ";
        return;
    }

    let playerChoice = selected.value;
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    document.querySelector("#playerChoiceDisplay").textContent = playerChoice;
    document.querySelector("#computerChoiceDisplay").textContent = computerChoice;

    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);

    if (playerChoice === computerChoice) {
        document.querySelector("#scoreBoard").textContent = "It's a tie!";
        document.querySelector("#scoreBoard").style.color = "orange";
        resultImg.src = " ";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        playerScore++;
        document.querySelector("#scoreBoard").textContent = "You win this round! ";
        document.querySelector("#scoreBoard").style.color = "green";
        document.querySelector("#playerScore").textContent = playerScore;
    }
    else {
        computerScore++;
        document.querySelector("#scoreBoard").textContent = "Computer win this round! ";
        document.querySelector("#scoreBoard").style.color = "red";
        document.querySelector("#computerScore").textContent = computerScore;
    }
    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
}

function endGame() {
    let resultImg = document.querySelector("#resultImg");

    document.querySelector("#play").style.display = "none";
    document.querySelector("#tryAgain").style.display = "inline";

    if (playerScore > computerScore) {
        document.querySelector("#scoreBoard").textContent = " ";
        resultImg.src = "img/win.jfif";
    } else {
        document.querySelector("#scoreBoard").textContent = " ";
        resultImg.src = "img/lose.jfif";
    }
}