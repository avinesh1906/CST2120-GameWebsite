// Entire script will be in script mode
"use strict";

// global variables
let btn = document.getElementById("submit_btn");
let usr = document.getElementById("Username");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let confirm_pwd = document.getElementById("confirm_password");

// call validateRegisterForm function when submit button is click.
btn.onclick = validateRegisterForm;

// function to validate username
function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");
    let users = JSON.parse(localStorage.users);
    /* Regular Expression for validating username with the following conditions: 
    1. 8-20 characters long
    2. no _ or . at the end
    3. no _ or . at the beginning 
    4. no __ or _. or ._ or .. inside */
    let re = new RegExp("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$");
    
    // verify if input field is empty
    if (usr.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if pass the regex 
    } else if (!re.test(usr.value)) { 
        btn.disabled = true;
        details.innerHTML = '*Username should be 8-20 characters long <br> no _ or . at the end <br>  no _ or . at the beginning <br> no __ or _. or ._ or .. inside ';
        details.style.color = "#FDD2BF";
        return false;
    }

    //  loop through the JS object
    for (let i = 0; i < users.length; i++){
        //  check if username alread exist
        if (users[i].username == usr.value){
            btn.disabled = true;
            details.innerHTML = '*username not available';
            details.style.color = "#FDD2BF";
            return false;
        }
    }
    
    // success message
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

//  function to validate email
function emailValidation() {
    //variables
    let details = document.getElementById("email_details");

    // Regular expression for validating email
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // check if input field is empty
    if (email.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = "*required";
        details.style.color = "#FDD2BF";
        return false;
    // check if pass the regex
    } else if (!email.value.match(re)){
        btn.disabled = true;
        details.innerHTML = "Your email address must be in the <br> format of name@domain.com";
        details.style.color = "#FDD2BF";
        return false;
    }
    // succcess message
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

//  function to validate password
function passwordValidation() {
    // variables 
    let details = document.getElementById("pwd_details");
    /* Regular Expression for validating password with the following conditions:
    1. Min 6 elements
    2. Containing at least:
        a. A symbol (!@#$%^&*)
        b. Upper and lower case letter
        c. A number */
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$");

    // check if input field is empty
    if (pwd.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check if pass the regex
    } else if (!re.test(pwd.value)) {
        btn.disabled = true;
        details.style.color = "#FDD2BF";
        details.innerHTML = "Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters.";
        return false;
    }
    // success message
    btn.disabled = false;
    details.innerHTML = "Strong Password";
    details.style.color = "#77D970";
    return true;
    
}

// function to verify if confirm password matches password
function confirmPassword() {
    //variables
    let details = document.getElementById("confirmPWD_details");

    // check if input field is empty
    if (confirm_pwd.value.length == 0) {
        btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    // check whether the password matches
    } else if (confirm_pwd.value != pwd.value) {
        btn.disabled = true;
        details.style.color = "#FDD2BF";
        details.innerHTML = "Please enter the same password again";
        return false;
    }
    // success message
    btn.disabled = false;
    details.innerHTML = "Password matches";
    details.style.color = "#77D970";
    return true;
    
}

// function to make sure checkbox is checked
function checkbox(){
    if (!termsandcondition.checked){
        alert("Please indicate that you accept the Terms and Conditions");
        return false;
    }
    return true;
}

// function to validate the register form
function validateRegisterForm() {
    // call all functions to check if meet all conditions
    if (usernameValidation() && emailValidation() && passwordValidation() && confirmPassword() && checkbox()){
        // enable button
        btn.disabled = false;

        // extract input field value
        let user = usr.value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let Email = email.value;
        let Pwd = password.value;

        //  assign the value to an object
        let newUsr = {
            username: user,
            email: Email,
            dob: dob,
            gender: gender,
            password: Pwd,
            score: 0
        }

        //  convert existing JSON(html local storage) into JS objects
        let users = JSON.parse(localStorage.users);
        // append the new object to user object
        users.push(newUsr); 
        // convert JS objects into JSON for html local storage   
        localStorage.users = JSON.stringify(users);

        sessionStorage.loggedUser = usr.value;
        // redirect to index
        window.location.href="../index.php";
    
    // disable button if not met condition
    } else {
        btn.disabled = true;
    }
}
