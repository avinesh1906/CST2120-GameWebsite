//Existing users
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
        username: "test2024",
        email: "test1906@live.mdx.ac.uk",
        dob: "2011-01-19",
        gender: "female",
        password: "test2024@Pass",
        score: 36
    }
];

let usrDetails = JSON.stringify(users);
localStorage.users = usrDetails;

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