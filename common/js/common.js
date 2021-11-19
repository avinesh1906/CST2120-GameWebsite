// call function init when window loads
window.onload = init;

//  function init
function init() {
    // Create array of users if it does not exist.
    if(localStorage.users === undefined){
        //Existing users (objects as arrays)
        let users = [
            {
                username: "avinesh1906",
                email: "ac2024@live.mdx.ac.uk",
                dob: "2001-06-01",
                gender: "male",
                password: "password@Naagin06",
                score: 54
            }, 
            {
                username: "sounil2605",
                email: "souculloo@gmail.com",
                dob: "2011-01-19",
                gender: "male",
                password: "sou2024@Pass",
                score: 36
            },
            {
                username: "Anoopama05",
                email: "anoop@gmail.com",
                dob: "2012-10-05",
                gender: "female",
                password: "anoop@Culloo12",
                score: 49
            }
        ];
        // convert the JS object array into JSON
        let usrDetails = JSON.stringify(users);
        // create the local storage for storing user details
        localStorage.users = usrDetails;
    };

}

//  variable to store the toggleEye details
let toggle_name = document.getElementById("toggleEye");

// variable to store the URL content
let pathArray = window.location.pathname.split('/');
// access the last element of pathname
let pathname = pathArray[pathArray.length - 1];
// check if pathname is setting.php or register.php
if (pathname == 'setting.php' || pathname == 'register.php' ){
    // event listener to detect click on the eye
    toggle_name.addEventListener("click", togglePassword);
}

//  function for togglePaassword
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