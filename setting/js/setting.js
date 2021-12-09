// Entire script will be in script mode
"use strict";

// global variables
let btn = document.getElementById("submit_btn");
let users = JSON.parse(localStorage.users);

btn.onclick = validateSettingForm;
verifyLogin();


function verifyLogin() 
{   
    let text_message = document.getElementsByClassName("login_Required")[0];
    let game_window = document.getElementsByClassName("form-layout")[0];
    if (sessionStorage.loggedUser == undefined){
        text_message.style.display = "block";
    } else {
        game_window.style.display = "block";
    }
}

// function to validate old password
function oldPassword() {
    // variables 
    let details = document.getElementById("currentPWD_details");
    let current_pwd = document.getElementById("current_password");
    let user_password;
    for (let i = 0; i < users.length; i++){
        if (users[i].username == sessionStorage.loggedUser) {
            user_password = users[i].password;
        }
    }
    //  check if the input field is empty
    if (current_pwd.value.length == 0) {
        // error message
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        btn.disabled = true;
        return false;
    } else if (user_password != current_pwd.value){
        // error message
        details.innerHTML = 'password does not match';
        details.style.color = "#FDD2BF";
        btn.disabled = true;
        return false;
    } else {
        btn.disabled = false;
        details.innerHTML = "Correct Current Password";
        details.style.color = "#77D970";
        return true;
    }
        
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
    let current_pwd = document.getElementById("current_password");
    let new_pwd = document.getElementById("new_password");

    //  check if input field is empty
    if (new_pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if new password passes the regex test
    } else if (!re.test(new_pwd.value)) {
        details.innerHTML = " Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters. </span>";
        details.style.color = "#FDD2BF";
        return false;
    // check if new password is same as the old password
    } else if (new_pwd.value == current_pwd.value) {
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
    let details = document.getElementById("confirmPWD_details");
    let new_pwd = document.getElementById("new_password");
    let confirm_pwd = document.getElementById("confirm_password");

    // check for empty input field
    if (confirm_pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if password matches
    } else if (confirm_pwd.value != new_pwd.value) {
        details.innerHTML = "password does not match";
        details.style.color = "#FDD2BF";
        return false;
    } else {
        // sucessful messages
        btn.disabled = false;
        details.innerHTML = "Password matches ";
        details.style.color = "#77D970";
        return true;
    }

}

// function to validate setting form in general
function validateSettingForm() {
    let confirm_pwd = document.getElementById("confirm_password");
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

        for (let i = 0; i < users.length; i++){
            if (users[i].username == sessionStorage.loggedUser) {
                users[i].password =  confirm_pwd.value;
            }
        }
        // convert JS objects into JSON for html local storage   
        localStorage.users = JSON.stringify(users);
        // redirect to home page
        window.location.href="../index.php";
    } 
}