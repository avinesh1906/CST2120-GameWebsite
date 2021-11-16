let btn = document.getElementById("submit_btn");

window.onload = init;

function init() {
    btn.disabled = true;
}

function oldPassword() {
    // variables 
    let details = document.getElementById("currentPWD_details");
    let pwd = document.getElementById("current_password");

    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        btn.disabled = true;
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

function passwordValidation() {
    // variables 
    let details = document.getElementById("newPWD_details");
    /* Regular Expression for validating password with the following conditions:
    1. Min 6 elements
    2. Containing at least:
        a. A symbol (!@#$%^&*)
        b. Upper and lower case letter
        c. A number */
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$");
    let old_pwd = document.getElementById("current_password");
    let pwd = document.getElementById("new_password");

    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    } else if (!re.test(pwd.value)) {
        details.innerHTML = " Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters. </span>";
        details.style.color = "#FDD2BF";
        return false;
    } else if (pwd.value == old_pwd.value) {
        details.innerHTML = 'New password cannot be the same <br> as your old password.';
        details.style.color = "#FDD2BF";
        return false;
    } 
    btn.disabled = false;
    details.innerHTML = "Strong Password";
    details.style.color = "#77D970";
    return true;
    
}

function confirmPassword() {
    //variables
    let button = document.getElementById("submit_btn");
    let details = document.getElementById("confirmPWD_details");
    let pwd = document.getElementById("new_password");
    let confirm_pwd = document.getElementById("confirm_password");

    if (confirm_pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    } else if (confirm_pwd.value != pwd.value) {
        details.innerHTML = "password does not match";
        details.style.color = "#FDD2BF";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "Password matches ";
    details.style.color = "#77D970";
    return true;
    

}

function validateSettingForm() {
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
        btn.disabled = false;
        return true;
    } 
}