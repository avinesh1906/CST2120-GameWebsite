let btn = document.getElementById("submit_btn");
let usr = document.getElementById("Username");
let pwd = document.getElementById("Password");

btn.onclick = validateLoginForm;


function usernameValidation() {
    // variables 
    let details = document.getElementById("usr_details");

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
    let users = JSON.parse(localStorage.users);
    let details = document.getElementById("pwd_details");

    if (!usernameValidation() && !passwordValidation()){
        return false;
    } else {
        if (!usernameValidation()){
            return false;
        }
        if (!passwordValidation()){
            return false;
        }
        for (i = 0; i < users.length; i++){
            if (users[i].username == usr.value && users[i].password == pwd.value){
                console.log(users[i].username);
                console.log(usr.value);
                console.log(pwd.value);
                btn.disabled = false;
                window.location.href="../index.php";
            } else {
                console.log(users[i].username);
                console.log(usr.value);
                console.log(pwd.value);
                details.innerHTML = '*username/password incorrect';
                details.style.color = "#FDD2BF";
            }
        }
    }
}

