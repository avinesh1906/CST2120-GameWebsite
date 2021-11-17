let btn = document.getElementById("submit_btn");
let usr = document.getElementById("Username");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let confirm_pwd = document.getElementById("confirm_password");


btn.onclick = validateRegisterForm;

function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");
    let users = JSON.parse(localStorage.users);

    if (usr.value.length == 0) {
        // btn.disabled = true;
        details.innerHTML = '*required';
        details.style.color = "#FDD2BF";
        return false;
    } 

    for (i = 0; i < users.length; i++){
        if (users[i].username == usr.value){
            // btn.disabled = true;
            details.innerHTML = '*username not available';
            details.style.color = "#FDD2BF";
            return false;
        }
    }
   
    // btn.disabled = false;
    details.innerHTML = "";
    return true;
    
}

function emailValidation() {
    //variables
    let details = document.getElementById("email_details");

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
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$");

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
    if (usernameValidation() && emailValidation() && passwordValidation() && confirmPassword() && checkbox()){
        btn.disabled = false;
        console.log("uhmmm");
        // input field value
        let user = usr.value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let Email = email.value;
        let Pwd = password.value;

        let newUsr = {
            username: user,
            email: Email,
            dob: dob,
            gender: gender,
            password: Pwd
        }

        let users = JSON.parse(localStorage.users);
        users.push(newUsr);       
        localStorage.users = JSON.stringify(users);

        window.location.href="../index.php";
    } else {
        btn.disabled = true;
    }
}
