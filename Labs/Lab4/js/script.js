

document.querySelector("#zipCodeInput").addEventListener("input", displayCity);
document.querySelector("#passwordInput").addEventListener("click", password);
document.querySelector("#userNameInput").addEventListener("input", userNameDisplay);
document.querySelector("#state").addEventListener("change", displayCounty);
document.querySelector("#signupForm").addEventListener("submit", function (event) {
    validateForm(event)
});

pageLoad();

let passwordInput = document.querySelector("#passwordInput");

async function displayCity() {
    let zipCode = document.querySelector("#zipCodeInput").value;
    let zipError = document.querySelector("#zipError");
    zipError.textContent = " ";
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;

    let response = await fetch(url);
    let data = await response.json();

    // console.log(data);
    if (data === false) {
        zipError.textContent = "Zip code not found";
        zipError.style.color = "red";
        document.querySelector("#cityDisplay").innerHTML = "";
        document.querySelector("#latitudeDisplay").textContent = "";
        document.querySelector("#longitudeDisplay").textContent = "";
    } else {
        document.querySelector("#cityDisplay").innerHTML = data.city;
        document.querySelector("#latitudeDisplay").textContent = data.latitude;
        document.querySelector("#longitudeDisplay").textContent = data.longitude;
    }

}

async function displayCounty() {
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;

    let response = await fetch(url);
    let data = await response.json();
    // console.data(data[0].json);
    let countyList = document.querySelector("#county");
    countyList.innerHTML = "<option> Select County</option>";

    for (let i = 0; i < data.length; i++) {
        countyList.innerHTML += `<option> ${data[i].county} </option>`;
    }
}

async function password() {
    let url = `https://csumb.space/api/suggestedPassword.php?length=8`;

    let response = await fetch(url);
    let data = await response.json();

    document.querySelector("#passwordSuggestion").textContent = "Suggested Password: " + data.password;
}

async function userNameDisplay() {
    let userName = document.querySelector("#userNameInput").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${userName}`;

    let response = await fetch(url);
    let data = await response.json();

    msg = document.querySelector("#userNameAvail");
    if (data.available) {
        msg.textContent = "Username available";
        msg.style.color = "green";
    } else {
        msg.textContent = "Username not available";
        msg.style.color = "red";
    }

}

async function validateForm(e) {
    let isValid = true;
    let userName = document.querySelector("#userNameInput").value;
    let password = document.querySelector("#passwordInput").value;
    let retypePassword = document.querySelector("#retypePasswordInput").value;

    if (userName.length == 0) {
        document.querySelector("#userNameAvail").innerHTML = "Username Required!";
        document.querySelector("#userNameAvail").style.color = "red";
        isValid = false;
    }
    if (userName.length > 0 && userName.length < 3) {
        document.querySelector("#userNameAvail").textContent = "Username must be at least 3 characters";
        document.querySelector("#userNameAvail").style.color = "red";
        isValid = false;
    }
    if (password.length < 6) {
        document.querySelector("#passwordError").textContent = "Password must be at least 6 characters";
        document.querySelector("#passwordError").style.color = "red";
        isValid = false;
    }
    if (password !== retypePassword) {
        document.querySelector("#passwordError").textContent = "Passwords do not match";
        document.querySelector("#passwordError").style.color = "red";
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
}

async function pageLoad() {

    let url = `https://csumb.space/api/allStatesAPI.php`;

    let response = await fetch(url);
    let data = await response.json();
    // console.data(data[0].json);
    let stateList = document.querySelector("#state");
    stateList.innerHTML = "<option> Selct state</option>";

    for (let i = 0; i < data.length; i++) {
        stateList.innerHTML += `<option value="${data[i].usps}"> ${data[i].state} </option>`;
    }
}


