let btn = document.getElementById("submit_btn");

window.onload = init;

function init() {
    btn.disabled = true;
}

function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");
    let usr = document.getElementById("Username");

    if (usr.value.length == 0) {
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
    let pwd = document.getElementById("Password");
    let details = document.getElementById("pwd_details");

    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    }
    btn.disabled = false;
    details.innerHTML = "";
    return true;
}

function validateLoginForm(){
    if (!usernameValidation() && !passwordValidation()){
        return false;
    } else {
        if (!usernameValidation()){
            return false;
        }
        if (!passwordValidation()){
            return false;
        }
        btn.disabled = false;
        return true;
    }
}

