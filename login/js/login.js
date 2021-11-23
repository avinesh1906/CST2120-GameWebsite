// global variables
let btn = document.getElementById("submit_btn");
let usr = document.getElementById("Username");
let pwd = document.getElementById("Password");

// call the function validateLoginForm when submit button is clicked
btn.onclick = validateLoginForm;

// function to validate username
function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");

    // check if input field is empty
    if (usr.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        btn.disabled = true;
        return false;
    } 

    // succes message
    btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

// function to validate password
function passwordValidation() {
    // local variable
    let details = document.getElementById("pwd_details");

    // check if input field is empty
    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "";
    return true;
}

// function to validate login form in general
function validateLoginForm(){
    // convert JSON into js objects
    let users = JSON.parse(localStorage.users);
    let details = document.getElementById("pwd_details");

    // call all functions to check if meet all requirements
    if (!usernameValidation() && !passwordValidation()){
        return false;
    } else {
        if (!usernameValidation()){
            return false;
        }
        if (!passwordValidation()){
            return false;
        }
        // loop through the user objects
        for (i = 0; i < users.length; i++){
            //  check if password corresponds to that particular username
            if (users[i].username == usr.value && users[i].password == pwd.value){
                btn.disabled = false;
                sessionStorage.loggedUser = users[i].username;
                // redirect to home page
                window.location.href="../index.php";
            // error messages
            } else {
                details.innerHTML = '*username/password incorrect';
                details.style.color = "#FDD2BF";
            }
        }
    }
}

