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
function passwordValidation() {
    // variables 
    let details = document.getElementById("pwd_details");
    /* Regular Expression for validating password with the following conditions":
    1. Min 6 elements
    2. Containing at least:
        a. A symbol (!@#$%^&*)
        b. Upper and lower case letter
        c. A number */
    let re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$");

    let pwd = document.getElementById("Password");

    if (pwd.value.length == 0) {
        details.innerHTML = '*required';
    } else if (!re.test(pwd.value)) {
        console.log(re.test(pwd))
        details.innerHTML = '<span style=" color:red"> Password should contain at least one symbol, upper and lower case letter and a number of min 6 characters. </span>';
    } else {
        details.innerHTML = '<span style=" color:green"> Strong Password </span>';
    }
}