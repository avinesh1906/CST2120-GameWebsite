function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");
    let usr = document.getElementById("Username");

    if (usr.value.length == 0) {
        details.innerHTML = '*required';
    } else {
        details.innerHTML = '<span id="usr_details"></span>';
    }
}

function emailValidation() {
    //variables
    let details = document.getElementById("email_details");
    let email = document.getElementById("email")

    // Regular expression for validating email
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.length == 0) {
        details.innerHTML = "*required";
    } else if (!email.value.match(re)){
        console.log(email.value)
        details.innerHTML = "Enter a valid email address";
    } else {
        details.innerHTML = '<span id="email_details"></span>';
    }
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
        details.innerHTML = '*required';
    } else if (!re.test(pwd.value)) {
        details.innerHTML = '<span style=" color:red "> Password should contain at least one symbol, <br> upper and lower case letter <br> and a number of min 6 characters. </span>';
    } else {
        details.innerHTML = '<span style=" color:green"> Strong Password </span>';
    }
}

function confirmPassword() {
    //variables
    let details = document.getElementById("confirmPWD_details");
    let pwd = document.getElementById("password");
    let confirm_pwd = document.getElementById("confirm_password");

    if (confirm_pwd.value.length == 0) {
        details.innerHTML = '*required';
    } else if (confirm_pwd.value != pwd.value) {
        details.innerHTML = '<span style=" color:red "> password does not match </span>';
    } else {
        details.innerHTML = '<span style=" color:green"> Password matches </span>';
    }
}

// event listener to detect click on the eye
document.getElementById("toggleEye").addEventListener("click", togglePassword);

function togglePassword() {
    // variables
    let pwd = document.getElementById("password");
    let type = pwd.getAttribute("type");

    // toggle the type attribute
    if (type == 'password'){
        type = 'text';
    } else {
        type = 'password';
    }    
    pwd.setAttribute('type', type);

    //  change the icon 
    this.classList.toggle('fa-eye-slash');
}



