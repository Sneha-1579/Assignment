
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passInput  = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError  = document.getElementById("passError");

document.getElementById("submitBtn").addEventListener("click", function(){

    
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";

   
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        nameInput.style.borderColor = "red";
    } else {
        nameInput.style.borderColor = "green";
    }

    
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter email";
        emailInput.style.borderColor = "red";
    }
    else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        emailInput.style.borderColor = "red";
    }
    else {
        emailInput.style.borderColor = "green";
    }

    
    if (passInput.value.trim() === "") {
        passError.textContent = "Please enter password";
        passInput.style.borderColor = "red";
    }
    else if (passInput.value.length < 8) {
        passError.textContent = "Password should be 8 characters";
        passInput.style.borderColor = "red";
    }
    else {
        passInput.style.borderColor = "green";
    }
});