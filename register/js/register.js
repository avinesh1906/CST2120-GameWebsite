let btn = document.getElementById("submit_btn");

window.onload = init;

function init() {
    btn.disabled = true;
    console.log(localStorage)
}

function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");
    let usr = document.getElementById("Username");

    if (usr.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

function emailValidation() {
    //variables
    let details = document.getElementById("email_details");
    let email = document.getElementById("email")

    // Regular expression for validating email
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = "*required";
        details.style.color = "#FDD2BF";
        return false;
    } else if (!email.value.match(re)){
        btn.disabled = true;
        details.innerHTML = "Your email address must be in the <br> format of name@domain.com";
        details.style.color = "#FDD2BF";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

function passwordValidation() {
    // variables 
    let details = document.getElementById("pwd_details");
    /* Regular Expression for validating password with the following conditions:
    1. Min 6 elements
    2. Containing at least:
        a. A symbol (!@#$%^&*)
        b. Upper and lower case letter
        c. A number */
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$");

    let pwd = document.getElementById("password");

    if (pwd.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    } else if (!re.test(pwd.value)) {
        btn.disabled = true;
        details.style.color = "#FDD2BF";
        details.innerHTML = "Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters.";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "Strong Password";
    details.style.color = "#77D970";
    return true;
    
}

function confirmPassword() {
    //variables
    let details = document.getElementById("confirmPWD_details");
    let pwd = document.getElementById("password");
    let confirm_pwd = document.getElementById("confirm_password");

    if (confirm_pwd.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    } else if (confirm_pwd.value != pwd.value) {
        btn.disabled = true;
        details.style.color = "#FDD2BF";
        details.innerHTML = "Please enter the same password again";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "Password matches";
    details.style.color = "#77D970";
    return true;
    
}


function checkbox(){
    if (!termsandcondition.checked){
        alert("Please indicate that you accept the Terms and Conditions");
        return false;
    }
    return true;
}
function validateRegisterForm() {
    if (!usernameValidation() && !emailValidation() && !passwordValidation() && !confirmPassword() && !checkbox()){
        return false;
    } else {
        if (!usernameValidation()){
            return false;
        }
        if (!emailValidation()){
            return false;
        }
        if (!passwordValidation()){
            return false;
        }
        if (!confirmPassword()){
            return false;
        }
        if (!checkbox()){
            return false;
        }
        btn.disabled = false;
        return true;
    }

}

