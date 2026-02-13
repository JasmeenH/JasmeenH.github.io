console.log("running")

// this is the correct number
let correctNum = 13
//  message one get after guessing correct
let correctMsg = "Congrats!";
let msgForLessThan7 = "You did it in less than 7 attempts";

let guessInput = document.querySelector("#guessInput");
let guessBtn = document.querySelector("#guessBtn");
let guessResult = document.querySelector("#guessResult");
let lessthan7Msg = document.querySelector("#lessthan7Msg");
let resetBtn = document.querySelector("#resetBtn");

let count = 0;
let guesses = [];
let countLeft = 7;

// function displayWinMsg(){
//     guessResult.textContent = correctMsg;
//     guessResult.style.color = "green";
// }

// event listener, it will display the msg after click button
document.querySelector("#guessBtn").addEventListener("click", function () {
    if (guessInput.value < 1 || guessInput.value > 99) {
        guessResult.textContent = "Please enter a value between 1 and 99!";
        guessResult.style.color = "red";
        return;
    }
    count++;
    countLeft = 7 - count;
    if (correctNum == guessInput.value) {
        guessResult.textContent = correctMsg;
        guessResult.style.color = "green";
        guessBtn.style.display = "none";
        resetBtn.style.display = "inline";
        if (count == 1) {
            lessthan7Msg.textContent = "You did it in " + count + " try!";
        } else if (count > 1 && count < 8) {
            lessthan7Msg.textContent = "You did it in " + count + " tries!";
        }
    } else {
        if (count == 7) {
            guessResult.textContent = "Sorry, you lost!";
            guessResult.style.color = "red";
            guessBtn.style.display = "none";
            resetBtn.style.display = "inline";
        } else if (guessInput.value > correctNum) {
            guessResult.textContent = "very high!";
            guessResult.style.color = "red";
            lessthan7Msg.textContent = "You have " + countLeft + " attempst left!";
        } else {
            guessResult.textContent = "very low!";
            guessResult.style.color = "red";
            lessthan7Msg.textContent = "You have " + countLeft + " attempts left!";
        }
    }
});

// document.querySelector("#resetBtn").addEventListener("click", function () {
    
// });
