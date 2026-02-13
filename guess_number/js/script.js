// alert("running external JS code!")

// document.querySelector("h1").style.color = "red";

// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);


//Global variables
let randomNumber;
let attempts;
let attemptsleft;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    attempts = 0;
    attemptsleft = 7

    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    // showing the guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); // adding foucs to textbox
    playerGuess.value = ""; // clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; // clearing the feedback
    document.querySelector("#guesses").textContent = "";

    let attemptsMsg = document.querySelector("#attemptsMsg");
    attemptsMsg.textContent = "";
    document.querySelector("#attempstMsg").textContent = "";

    let attemptsLeftMsg = document.querySelector("#attemptsLeftMsg");
    attemptsLeftMsg.textContent = "";
    document.querySelector("#attempstLeftMsg").textContent = "";
}

function checkGuess() {
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    let attemptsMsg = document.querySelector("#attemptsMsg");
    attemptsMsg.textContent = "";


    let attemptsLeftMsg = document.querySelector("#attemptsLeftMsg");
    attemptsLeftMsg.textContent = "";

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Please enter a value between 1 and 99!";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";

    attemptsleft = 7 - attempts;

    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        gameOver();
        wins++;
        document.querySelector("#wins").textContent = wins;
        if(attempts == 1){
            attemptsMsg.textContent = "You did it in " + attempts + " try!";     
        }else if(attempts > 1 && attempts < 8){
            attemptsMsg.textContent = "You did it in " + attempts + " tries!";     
        }
    }
    else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            attemptsMsg.textContent = "Right answer is " + randomNumber;
            gameOver();
            losses++;
            document.querySelector("#losses").textContent = losses;
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high!";
            attemptsLeftMsg.textContent = "You have " + attemptsleft + " attempts left!";
        } else {
            feedback.textContent = "Guess was low!";
            attemptsLeftMsg.textContent = "You have " + attemptsleft + " attempts left!";
        }
    }

    function gameOver() {
        guessBtn = document.querySelector("#guessBtn");
        resetBtn = document.querySelector("#resetBtn");
        guessBtn.style.display = "none"; // hides guess btn
        resetBtn.style.display = "inline"; // shows reset btn
    }
}