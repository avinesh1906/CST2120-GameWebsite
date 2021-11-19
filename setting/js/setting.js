// global variables
let btn = document.getElementById("submit_btn");

// call function init on window load
window.onload = init;

// function init
function init() {
    // disable submit button
    btn.disabled = true;
}

// function to validate old password
function oldPassword() {
    // variables 
    let details = document.getElementById("currentPWD_details");
    let pwd = document.getElementById("current_password");

    //  check if the input field is empty
    if (pwd.value.length == 0) {
        // error message
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        btn.disabled = true;
        return false;
    }
    // success message
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

//  function to validate new password
function passwordValidation() {
    // variables 
    let details = document.getElementById("newPWD_details");
    /* Regular Expression for validating password with the following conditions:
    1. Min 6 elements
    2. Containing at least:
        a. A symbol (!@#$%^&*)
        b. Upper and lower case letter
        c. A number */
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$");
    let old_pwd = document.getElementById("current_password");
    let pwd = document.getElementById("new_password");

    //  check if input field is empty
    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if new password passes the regex test
    } else if (!re.test(pwd.value)) {
        details.innerHTML = " Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters. </span>";
        details.style.color = "#FDD2BF";
        return false;
    // check if new password is same as the old password
    } else if (pwd.value == old_pwd.value) {
        details.innerHTML = 'New password cannot be the same <br> as your old password.';
        details.style.color = "#FDD2BF";
        return false;
    } 
    // sucessful message
    btn.disabled = false;
    details.innerHTML = "Strong Password";
    details.style.color = "#77D970";
    return true;
    
}

// function to verify confirm password matches new password
function confirmPassword() {
    //variables
    let button = document.getElementById("submit_btn");
    let details = document.getElementById("confirmPWD_details");
    let pwd = document.getElementById("new_password");
    let confirm_pwd = document.getElementById("confirm_password");

    // check for empty input field
    if (confirm_pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if password matches
    } else if (confirm_pwd.value != pwd.value) {
        details.innerHTML = "password does not match";
        details.style.color = "#FDD2BF";
        return false;
    }
    // sucessful messages
    btn.disabled = false;
    details.innerHTML = "Password matches ";
    details.style.color = "#77D970";
    return true;
}

// function to validate setting form in general
function validateSettingForm() {
    let users = JSON.parse(localStorage.users);
    if (!oldPassword() && !passwordValidation() && !confirmPassword()){
        return false;
        
    } else {
        if (!oldPassword()){
            return false;
        } 
        if (!passwordValidation()) {
            return false;
        }
        if (!confirmPassword()){
            return false;
        }

        // for (i = 0; i < users.length; i++){

        // };
        btn.disabled = false;
        return true;
    } 
}