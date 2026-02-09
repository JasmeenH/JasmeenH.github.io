console.log("running")

// this is the correct number
let correctNum = 13; 
//  message one get after guessing correct
let correctMsg = "Congrats!";
let msgForLessThan7 = "You did it in less than 7 attempts";

let guessInput = document.querySelector("#guessInput");
let guessBtn = document.querySelector("#guessBtn");
let guessResult = document.querySelector("#guessResult");
let lessthan7Msg = document.querySelector("#lessthan7Msg");
let count = 0;

// function displayWinMsg(){
//     guessResult.textContent = correctMsg;
//     guessResult.style.color = "green";
// }

// event listener, it will display the msg after click button
document.querySelector("#guessBtn").addEventListener("click", function (){
    count++;
    if(correctNum == guessInput.value){
        guessResult.textContent = correctMsg;
        guessResult.style.color = "green";
        if(count < 8){
            lessthan7Msg.textContent = "You did it in " + count + " tries!";     
        }else{
            lessthan7Msg.textContent = "";
        }
    } else if(guessInput.value < correctNum){
        guessResult.textContent = "very low";
        guessResult.style.color = "red";
    }else if(guessInput.value > correctNum){
        guessResult.textContent = "very high";
        guessResult.style.color = "red";
    }

    

});
