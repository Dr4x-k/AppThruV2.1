const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    pswField = form.querySelector(".password-field"),
    pswInput = pswField.querySelector(".psw"),
    cpswField = form.querySelector(".cPassword-field"),
    cpswInput = cpswField.querySelector(".cpsw");

// Email validator
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern) && emailInput.value !== "") {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

//
const eyeIcons = document.querySelectorAll(".show-hide");
//console.log(eyeIcons);

eyeIcons.forEach(eyeIcons => {
    eyeIcons.addEventListener("click", () => {
        const pInput = eyeIcons.parentElement.querySelector("input");
        //console.log(pInput);
        //
        if (pInput.type === "password") {
            eyeIcons.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcons.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
});

// Password Validator
function createPass() {
    const passPatern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pswInput.value.match(passPatern) && pswInput.value !== "") {
        return pswField.classList.add("invalid");
    }
    pswField.classList.remove("invalid");
}

// Confirm password validation
function confirmPass() {
    if (pswInput.value !== cpswInput.value && cpswInput.value !== "") {
        console.log(true);
        return cpswField.classList.add("invalid");
    }
    cpswField.classList.remove("invalid");
}

// call funciton checkEmail
form.addEventListener("keyup", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();

    emailInput.addEventListener("keyup", checkEmail);
    pswInput.addEventListener("keyup", createPass);
    cpswInput.addEventListener("keyup", confirmPass);
});
