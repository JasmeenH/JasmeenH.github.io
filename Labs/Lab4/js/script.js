async function pageLoad() {
    //any code that happens when the page loads goes here
}
pageLoad();
let zipCodeInput = document.querySelector("#zipCodeInput");
zipCodeInput.addEventListener("input", async function () {
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#cityDisplay").textContent = data.city;
        document.querySelector("#latitudeDisplay").textContent = data.latitude;
        document.querySelector("#longitudeDisplay").textContent = data.longitude;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } 
});

let passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("click", async function() {
    let url = `https://csumb.space/api/suggestedPassword.php?length=8`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#passwordGuess").textContent = data.password;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } 
})

let userNameInput = document.querySelector("#userNameInput");
userNameInput.addEventListener("input", async function() {
    let url = `https://csumb.space/api/usernamesAPI.php?username=${userNameInput.value}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#usernameGuess").textContent = data.available;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } 
})


let signUpBtn = document.querySelector("#signUp")
signUpBtn.addEventListener("click", function(){
    if(passwordInput.value.length < 6 ){
        document.querySelector("#errorMsg").textContent = "less than 6";
    }else{
        document.querySelector("#errorMsg").textContent = " ";
    }
})

let stateInput = document.querySelector("#states");
stateInput.addEventListener("click", async function() {
    let url = `https://csumb.space/api/allStatesAPI.php`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#usernameGuess").textContent = ;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } 
})

