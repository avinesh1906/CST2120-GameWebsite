let toggle_name = document.getElementById("toggleEye");
// event listener to detect click on the eye
toggle_name.addEventListener("click", togglePassword);

function togglePassword() {
    // variables
    
    let pwd = document.getElementById(toggle_name.getAttribute("name"));
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